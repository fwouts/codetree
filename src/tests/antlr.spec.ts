import "mocha";

import * as antlr from "antlr4ts";
import * as codeTree from "../index";

import { JavaLexer } from "../../example/parsers/java/JavaLexer";
import { JavaParser } from "../../example/parsers/java/JavaParser";
import { expect } from "chai";

describe("ANTLR-based parser", () => {
  const TREE = parseJavaCompilationUnit(
    `package example;

public class Example {
  public static void main() {
    System.out.println("Hello, World!");
  }
}
`
  );
  it("should reprint identical code", () => {
    expect(codeTree.printSource(TREE)).to.equal(
      `package example;

public class Example {
  public static void main() {
    System.out.println("Hello, World!");
  }
}
`
    );
  });
  it("should find matching nodes", () => {
    expect(codeTree.findTree(TREE, TREE)).to.be.eq(TREE);
    expect(
      codeTree.findTree(TREE, parseJavaStatement("System.out.println(__);"))
    ).to.not.be.null;
    expect(
      codeTree.findTree(
        TREE,
        parseJavaStatement('System.out.println("Hello, World!");')
      )
    ).to.not.be.null;
    expect(
      codeTree.findTree(
        TREE,
        parseJavaStatement('System.out.println("different");')
      )
    ).to.be.null;
    expect(codeTree.findTree(TREE, parseJavaStatement("non.existent();"))).to.be
      .null;
  });
  it("should replace matching nodes", () => {
    expect(
      codeTree.printSource(
        codeTree.transformTree(
          TREE,
          parseJavaStatement(`System.out.println("Hello, World!");`),
          matchedTree => parseJavaStatement(`alert("Hi!");`)
        )
      )
    ).to.equal(
      `package example;

public class Example {
  public static void main() {
    alert("Hi!");
  }
}
`
    );
    expect(
      codeTree.printSource(
        codeTree.transformTree(
          TREE,
          parseJavaStatement(`System.out.println(__);`),
          matchedTree => parseJavaStatement(`alert("Hi!");`)
        )
      )
    ).to.equal(
      `package example;

public class Example {
  public static void main() {
    alert("Hi!");
  }
}
`
    );
    expect(
      codeTree.printSource(
        codeTree.transformTree(
          TREE,
          parseJavaStatement(`non.existent();`),
          matchedTree => parseJavaStatement(`alert("Hi!");`)
        )
      )
    ).to.equal(
      `package example;

public class Example {
  public static void main() {
    System.out.println("Hello, World!");
  }
}
`
    );
  });
});

function parseJavaCompilationUnit(code: string): codeTree.nodes.Tree {
  let node = codeTree.antlr.parse(
    JavaLexer,
    JavaParser,
    p => p.compilationUnit(),
    code
  );
  if (!(node instanceof codeTree.nodes.Tree)) {
    throw new Error();
  }
  return node;
}

function parseJavaStatement(code: string): codeTree.nodes.Node {
  return codeTree.antlr.parse(JavaLexer, JavaParser, p => p.statement(), code);
}
