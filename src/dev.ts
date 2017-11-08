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
  let inputStream = new antlr.ANTLRInputStream(code);
  let lexer = new JavaLexer(inputStream);
  let tokenStream = new antlr.CommonTokenStream(lexer);
  let parser = new JavaParser(tokenStream);
  let compilationUnit = parser.compilationUnit();
  let tree = createSourceTree(compilationUnit, code)[0];
  console.log(util.inspect(tree, false, Number.MAX_SAFE_INTEGER));
  console.log(printSource(tree));
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

runExample();
