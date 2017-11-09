import * as antlr from "antlr4ts";

import { Node, Space, Token, Tree } from "./nodes";

import { TerminalNode } from "antlr4ts/tree/TerminalNode";

export function parse<L extends antlr.Lexer, P extends antlr.Parser>(
  lexerConstructor: new (inputStream: antlr.ANTLRInputStream) => L,
  parserConstructor: new (tokenStream: antlr.TokenStream) => P,
  rootNode: (parser: P) => antlr.ParserRuleContext,
  code: string
): Node {
  let inputStream = new antlr.ANTLRInputStream(code);
  let lexer = new lexerConstructor(inputStream);
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
  let parser = new parserConstructor(tokenStream);
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
    let tree = new Tree(antlrNode.constructor.name);
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
