import * as antlr from "./antlr";
import * as fs from "fs";
import * as path from "path";
import * as tools from "./tools";
import * as ts from "typescript";
import * as tsParsing from "./typescript";
import * as util from "util";

import { Tree } from "./nodes";

function runJavaExample() {
  let code = fs.readFileSync(
    path.join(__dirname, "example", "Example.java"),
    "utf8"
  );
  let tree = antlr.parse(code, parser => parser.compilationUnit());
  if (!(tree instanceof Tree)) {
    throw new Error();
  }
  let mutatedTree = tools.transformTree(
    tree,
    antlr.parse(`System.out.println(__);`, parser => parser.statement()),
    matchedTree => antlr.parse(`alert("Hi!");`, parser => parser.statement())
  );
  console.log(tools.printSource(mutatedTree));
}

function runTypeScriptExample() {
  let code = fs.readFileSync(
    path.join(__dirname, "example", "example.ts"),
    "utf8"
  );
  let tree = tsParsing.parse(code, ts.SyntaxKind.SourceFile);
  if (!(tree instanceof Tree)) {
    throw new Error();
  }
  let mutatedTree = tools.transformTree(
    tree,
    tsParsing.parse("console.log(__);", ts.SyntaxKind.ExpressionStatement),
    matchedTree =>
      tsParsing.parse(
        `console.error("Hi!");`,
        ts.SyntaxKind.ExpressionStatement
      )
  );
  console.log(tools.printSource(mutatedTree));
}

runJavaExample();
runTypeScriptExample();
