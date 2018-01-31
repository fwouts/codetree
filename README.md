# CodeTree

[![NPM](https://img.shields.io/npm/v/codetree.svg)](https://www.npmjs.com/package/codetree) [![Build status](https://img.shields.io/circleci/project/github/fwouts/codetree.svg)](https://circleci.com/gh/fwouts/codetree)

CodeTree is an ES6 library (written in TypeScript) that helps transform code easily.

## Transforming TypeScript or JavaScript code

```javascript
import * as codeTree from "codetree";

// This is the JavaScript (or TypeScript) code we want to transform.
let code = `
  function sayHelloWorld() {
    console.log("Hello, World!");
  }
`;

// Convert the source code to a parse tree.
let tree = codeTree.typescript.parse(code);

// Create a mutated tree.
let mutatedTree = codeTree.transformTree(
  tree,
  // Match any console.log() statement. Double underscore means "anything".
  codeTree.typescript.parse("console.log(__);"),
  // Replace with console.error("Hi!");
  matchedTree => codeTree.typescript.parse(`console.error("Hi!");`)
);

// Convert the mutated tree back into source code.
// Your comments and formatting will not be lost. Yay!
console.log(codeTree.printSource(mutatedTree));

```

Give it a try yourself here: https://runkit.com/fwouts/using-codetree-to-mutate-javascript

## Transforming any other language

Any language that can be parsed with [ANTLR4](https://github.com/antlr/antlr4) can be transformed with CodeTree. That is, virtually any language since open-source contributors have been kind enough to provide an extensive library of grammars in the [grammars-v4 repo](https://github.com/antlr/grammars-v4).

### Creating the parser and lexer

After downloading the ANTLR grammar for your language (one combined or two parser + lexer files ending with the `.g4` extension), you'll need to generate the TypeScript lexer and parser before you can use CodeTree.

Here is an example using the Java grammar:
```shell
$ npm install -g antlr4ts-cli
$ antlr4ts -no-listener -no-visitor *.g4
Generating file '/Users/work/GitHub/abc/./JavaLexer.ts' for grammar 'JavaLexer.g4'
Generating file '/Users/work/GitHub/abc/./JavaLexer.tokens' for grammar 'JavaLexer.g4'
Generating file '/Users/work/GitHub/abc/./JavaParser.ts' for grammar 'JavaParser.g4'
Generating file '/Users/work/GitHub/abc/./JavaParser.tokens' for grammar 'JavaParser.g4'
```

This will generate two new files: `JavaLexer.ts` and `JavaParser.ts`. You can ignore the `.token` files and even delete them. They're not necessary.

If you work with JavaScript and not TypeScript, convert these files to ES6 using:
```shell
$ npm install -g typescript
$ npm install antlr4ts
$ tsc *.ts --target es6 --experimentalDecorators --moduleResolution node
$ mv *.js path/to/src/
```

### Using the parser and lexer

Now, all you need to do is:
```javascript
import * as codeTree from "codetree";

import { JavaLexer } from "./parsers/java/JavaLexer";
import { JavaParser } from "./parsers/java/JavaParser";

// This is the Java code we want to transform.
let code = `
  package example;

  public class Example {
    public static void main() {
      System.out.println("Hello, World!");
    }
  }
`;

// Convert the source code to a parse tree.
let tree = codeTree.antlr.parse(
  JavaLexer,
  JavaParser,
  // This tells CodeTree that we need a CompilationUnit node. This will depend on the
  // grammar you use.
  parser => parser.compilationUnit(),
  code
);
// Just making sure we got a tree and not a terminal node.
if (!(tree instanceof codeTree.nodes.Tree)) {
  throw new Error();
}

// Create the mutated tree.
let mutatedTree = codeTree.transformTree(
  tree,
  codeTree.antlr.parse(
    JavaLexer,
    JavaParser,
    // This tells CodeTree that we're looking to match a statement.
    parser => parser.statement(),
    // Match any statement that is a call to System.out.println().
    `System.out.println(__);`
  ),
  matchedTree =>
    codeTree.antlr.parse(
      JavaLexer,
      JavaParser,
      // This tells CodeTree that we're replacing with a statement.
      parser => parser.statement(),
      // Replace with alert("Hi!");
      `alert("Hi!");`
    )
);

// Convert the mutated tree back into source code.
console.log(codeTree.printSource(mutatedTree));
```

# FAQ

## Why not use search-and-replace or regular expressions?

Unlike search-and-replace approaches, CodeTree operates on "parse trees", and not simply strings. This means that you don't have to worry about spacing, or comments in the middle of the code you're trying to match.

Of course, CodeTree may be overkill for simple changes. It's just one more tool at your disposal.
