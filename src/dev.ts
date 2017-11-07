import * as fs from "fs";
import * as path from "path";

import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";

import { JavaLexer } from "./parsers/java/JavaLexer";
import { JavaParser } from "./parsers/java/JavaParser";

runExample();

function runExample() {
  let code = fs.readFileSync(
    path.join(__dirname, "example", "Example.java"),
    "utf8"
  );
  let inputStream = new ANTLRInputStream(code);
  let lexer = new JavaLexer(inputStream);
  let tokenStream = new CommonTokenStream(lexer);
  let parser = new JavaParser(tokenStream);
  console.log(parser.compilationUnit());
}
