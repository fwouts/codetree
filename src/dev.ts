import * as antlr from "./antlr";
import * as fs from "fs";
import * as path from "path";
import * as tools from "./tools";
import * as util from "util";

import { Tree } from "./nodes";

function runExample() {
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

runExample();
