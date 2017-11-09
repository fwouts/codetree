import * as antlr from "./antlr";
import * as fs from "fs";
import * as path from "path";
import * as tools from "./tools";
import * as tsParsing from "./typescript";

import { JavaLexer } from "./parsers/java/JavaLexer";
import { JavaParser } from "./parsers/java/JavaParser";
import { Tree } from "./nodes";

function runJavaExample() {
  let code = fs.readFileSync(
    path.join(__dirname, "example", "Example.java"),
    "utf8"
  );
  let tree = antlr.parse(
    JavaLexer,
    JavaParser,
    parser => parser.compilationUnit(),
    code
  );
  if (!(tree instanceof Tree)) {
    throw new Error();
  }
  let mutatedTree = tools.transformTree(
    tree,
    antlr.parse(
      JavaLexer,
      JavaParser,
      parser => parser.statement(),
      `System.out.println(__);`
    ),
    matchedTree =>
      antlr.parse(
        JavaLexer,
        JavaParser,
        parser => parser.statement(),
        `alert("Hi!");`
      )
  );
  console.log(tools.printSource(mutatedTree));
}

function runTypeScriptExample() {
  let code = fs.readFileSync(
    path.join(__dirname, "example", "example.ts"),
    "utf8"
  );
  let tree = tsParsing.parse(code);
  let mutatedTree = tools.transformTree(
    tree,
    tsParsing.parse("console.log(__);"),
    matchedTree => tsParsing.parse(`console.error("Hi!");`)
  );
  console.log(tools.printSource(mutatedTree));
}

runJavaExample();
runTypeScriptExample();
