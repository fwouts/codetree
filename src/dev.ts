import * as antlr from "antlr4ts";
import * as fs from "fs";
import * as path from "path";
import * as util from "util";

import { JavaLexer } from "./parsers/java/JavaLexer";
import { JavaParser } from "./parsers/java/JavaParser";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";

function runExample() {
  let code = fs.readFileSync(
    path.join(__dirname, "example", "Example.java"),
    "utf8"
  );
  let tree = parse(code, parser => parser.compilationUnit());
  if (!(tree instanceof Tree)) {
    throw new Error();
  }
  let mutatedTree = transformTree(
    tree,
    parse(`System.out.println(__);`, parser => parser.statement()),
    matchedTree => parse(`alert("Hi!");`, parser => parser.statement())
  );
  console.log(printSource(mutatedTree));
}

class Tree {
  public children: Node[] = [];
}

type Node = Tree | Token | Space;

class Token {
  public tokenType: number;
  public text: string;

  constructor(tokenType: number, text: string) {
    this.tokenType = tokenType;
    this.text = text;
  }
}

class Space {
  public text: string;

  constructor(text: string) {
    this.text = text;
  }
}

function parse<T extends antlr.ParserRuleContext>(
  code: string,
  rootNode: (parser: JavaParser) => T
): Node {
  let inputStream = new antlr.ANTLRInputStream(code);
  let lexer = new JavaLexer(inputStream);
  lexer.removeErrorListeners();
  lexer.addErrorListener({
    syntaxError(
      // tslint:disable-next-line no-any
      recognizer: antlr.Recognizer<number, any>,
      offendingSymbol: number | undefined,
      line: number,
      charPositionInLine: number,
      msg: string,
      e: antlr.RecognitionException | undefined
    ) {
      throw new Error(msg + " at " + line + ":" + charPositionInLine);
    }
  });
  let tokenStream = new antlr.CommonTokenStream(lexer);
  let parser = new JavaParser(tokenStream);
  parser.removeErrorListeners();
  parser.addErrorListener({
    syntaxError(
      // tslint:disable-next-line no-any
      recognizer: antlr.Recognizer<antlr.Token, any>,
      offendingSymbol: antlr.Token | undefined,
      line: number,
      charPositionInLine: number,
      msg: string,
      e: antlr.RecognitionException | undefined
    ) {
      throw new Error(msg + " at " + line + ":" + charPositionInLine);
    }
  });
  let node = rootNode(parser);
  let tree = createSourceTree(node, code)[0];
  return tree;
}

function createSourceTree(
  antlrNode: antlr.ParserRuleContext | TerminalNode,
  fullCode: string,
  codePosition: { charIndex: number } = {
    charIndex: 0
  }
): Node[] {
  if (antlrNode instanceof antlr.ParserRuleContext) {
    let tree = new Tree();
    if (antlrNode.start.startIndex > codePosition.charIndex) {
      tree.children.push(
        new Space(
          fullCode.substring(codePosition.charIndex, antlrNode.start.startIndex)
        )
      );
      codePosition.charIndex = antlrNode.start.startIndex;
    }
    for (let i = 0; i < antlrNode.childCount; i++) {
      let child = antlrNode.getChild(i);
      if (
        child instanceof antlr.ParserRuleContext ||
        child instanceof TerminalNode
      ) {
        tree.children.push(...createSourceTree(child, fullCode, codePosition));
      } else {
        throw new Error("Unexpected child: " + child);
      }
    }
    if (antlrNode.stop!.stopIndex > codePosition.charIndex) {
      tree.children.push(
        new Space(
          fullCode.substring(
            codePosition.charIndex,
            antlrNode.stop!.stopIndex + 1
          )
        )
      );
      codePosition.charIndex = antlrNode.stop!.stopIndex + 1;
    }
    return [tree];
  } else {
    let nodes: Node[] = [];
    if (antlrNode.symbol.startIndex > codePosition.charIndex) {
      nodes.push(
        new Space(
          fullCode.substring(
            codePosition.charIndex,
            antlrNode.symbol.startIndex
          )
        )
      );
      codePosition.charIndex = antlrNode.symbol.startIndex;
    }
    if (antlrNode.text !== "<EOF>") {
      nodes.push(new Token(antlrNode.symbol.type, antlrNode.text));
      codePosition.charIndex += antlrNode.text.length;
    }
    if (antlrNode.symbol.stopIndex > codePosition.charIndex) {
      nodes.push(
        new Space(
          fullCode.substring(
            codePosition.charIndex,
            antlrNode.symbol.stopIndex + 1
          )
        )
      );
      codePosition.charIndex = antlrNode.symbol.stopIndex + 1;
    }
    return nodes;
  }
}

function printSource(node: Node): string {
  if (node instanceof Tree) {
    return node.children.map(childNode => printSource(childNode)).join("");
  } else if (node instanceof Token) {
    return node.text;
  } else {
    return node.text;
  }
}

function findTree(search: Tree, pattern: Tree) {
  if (treesMatch(search, pattern)) {
    return true;
  }
  for (let child of search.children) {
    if (child instanceof Tree) {
      if (findTree(child, pattern)) {
        return true;
      }
    }
  }
  return false;
}

function treesMatch(tree: Tree, pattern: Node) {
  if (pattern instanceof Space) {
    throw new Error("Unexpected space in search pattern.");
  }
  if (pattern instanceof Token && pattern.text === "__") {
    return true;
  }
  let treeChildrenWithoutSpaces = tree.children.filter(
    child => !(child instanceof Space)
  );
  let patternChildrenWithoutSpaces = pattern.children.filter(
    child => !(child instanceof Space)
  );
  if (
    treeChildrenWithoutSpaces.length !== patternChildrenWithoutSpaces.length
  ) {
    // TODO: Consider being more flexible, e.g. a function call with a variable number of arguments will not match
    // unless it has the exact same number of arguments.
    return false;
  }
  for (let i = 0; i < treeChildrenWithoutSpaces.length; i++) {
    let child = treeChildrenWithoutSpaces[i];
    let patternChild = patternChildrenWithoutSpaces[i];
    if (child instanceof Tree) {
      if (!treesMatch(child, patternChild)) {
        return false;
      }
    } else if (child instanceof Token && patternChild instanceof Token) {
      if (child.tokenType !== patternChild.tokenType) {
        return false;
      }
      if (patternChild.text.indexOf("__") !== -1) {
        // Ignore text, match anything.
      } else if (child.text !== patternChild.text) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

function transformTree(
  tree: Tree,
  pattern: Node,
  transform: (matchedTree: Tree) => Node
): Node {
  let cloned = cloneTree(tree);
  if (treesMatch(tree, pattern)) {
    return transform(cloned);
  }
  for (let i = 0; i < cloned.children.length; i++) {
    let child = cloned.children[i];
    if (child instanceof Tree) {
      cloned.children[i] = transformTree(child, pattern, transform);
    }
  }
  return cloned;
}

function cloneTree(tree: Tree): Tree {
  let cloned = new Tree();
  cloned.children = tree.children.map(cloneNode);
  return cloned;
}

function cloneNode(node: Node): Node {
  if (node instanceof Tree) {
    return cloneTree(node);
  } else if (node instanceof Token) {
    return new Token(node.tokenType, node.text);
  } else {
    return new Space(node.text);
  }
}

runExample();
