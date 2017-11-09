import * as codeTree from "../src";
import * as fs from "fs";
import * as path from "path";

import { JavaLexer } from "./parsers/java/JavaLexer";
import { JavaParser } from "./parsers/java/JavaParser";

function runJavaExample() {
  let code = fs.readFileSync(path.join(__dirname, "Example.java"), "utf8");
  let tree = codeTree.antlr.parse(
    JavaLexer,
    JavaParser,
    parser => parser.compilationUnit(),
    code
  );
  if (!(tree instanceof codeTree.nodes.Tree)) {
    throw new Error();
  }
  let mutatedTree = codeTree.transformTree(
    tree,
    codeTree.antlr.parse(
      JavaLexer,
      JavaParser,
      parser => parser.statement(),
      `System.out.println(__);`
    ),
    matchedTree =>
      codeTree.antlr.parse(
        JavaLexer,
        JavaParser,
        parser => parser.statement(),
        `alert("Hi!");`
      )
  );
  console.log(codeTree.printSource(mutatedTree));
}

function runTypeScriptExample() {
  let code = fs.readFileSync(path.join(__dirname, "example.ts"), "utf8");
  let tree = codeTree.typescript.parse(code);
  let mutatedTree = codeTree.transformTree(
    tree,
    codeTree.typescript.parse("console.log(__);"),
    matchedTree => codeTree.typescript.parse(`console.error("Hi!");`)
  );
  console.log(codeTree.printSource(mutatedTree));
}

runJavaExample();
runTypeScriptExample();
