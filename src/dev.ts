import * as antlr from "antlr4ts";
import * as fs from "fs";
import * as path from "path";

import { JavaLexer } from "./parsers/java/JavaLexer";
import { JavaParser } from "./parsers/java/JavaParser";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";

runExample();

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
  console.log(reprint(compilationUnit, code));
}

function reprint(
  tree: antlr.ParserRuleContext | TerminalNode,
  fullCode: string,
  codePosition: { charIndex: number } = {
    charIndex: 0
  }
) {
  let output: string[] = [];
  if (tree instanceof antlr.ParserRuleContext) {
    if (tree.start.startIndex > codePosition.charIndex) {
      output.push(
        fullCode.substring(codePosition.charIndex, tree.start.startIndex)
      );
      codePosition.charIndex = tree.start.startIndex;
    }
    for (let i = 0; i < tree.childCount; i++) {
      let child = tree.getChild(i);
      if (
        child instanceof antlr.ParserRuleContext ||
        child instanceof TerminalNode
      ) {
        output = output.concat(reprint(child, fullCode, codePosition));
      } else {
        throw new Error("Unexpected child: " + child);
      }
    }
    if (tree.stop!.stopIndex > codePosition.charIndex) {
      output.push(
        fullCode.substring(codePosition.charIndex, tree.stop!.stopIndex + 1)
      );
      codePosition.charIndex = tree.stop!.stopIndex + 1;
    }
  } else {
    if (tree.symbol.startIndex > codePosition.charIndex) {
      output.push(
        fullCode.substring(codePosition.charIndex, tree.symbol.startIndex)
      );
      codePosition.charIndex = tree.symbol.startIndex;
    }
    output.push(tree.text);
    codePosition.charIndex += tree.text.length;
    if (tree.symbol.stopIndex > codePosition.charIndex) {
      output.push(
        fullCode.substring(codePosition.charIndex, tree.symbol.stopIndex + 1)
      );
      codePosition.charIndex = tree.symbol.stopIndex + 1;
    }
  }
  return output;
}
