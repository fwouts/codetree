import "mocha";

import * as codeTree from "../index";

import { expect } from "chai";

describe("TypeScript-based parser", () => {
  const TREE = parseTree(
    `function sayHelloWorld() {
  console.log("Hello, World!");
}

sayHelloWorld();
`
  );
  it("should reprint identical code", () => {
    expect(codeTree.printSource(TREE)).to.equal(
      `function sayHelloWorld() {
  console.log("Hello, World!");
}

sayHelloWorld();`
    );
  });
  it("should find matching nodes", () => {
    expect(codeTree.findTree(TREE, TREE)).to.be.eq(TREE);
    expect(codeTree.findTree(TREE, parseTree("console.log(__);"))).to.not.be
      .null;
    expect(codeTree.findTree(TREE, parseTree('console.log("Hello, World!");')))
      .to.not.be.null;
    expect(codeTree.findTree(TREE, parseTree('console.log("different");'))).to
      .be.null;
    expect(codeTree.findTree(TREE, parseTree("non.existent();"))).to.be.null;
  });
  it("should replace matching nodes", () => {
    expect(
      codeTree.printSource(
        codeTree.transformTree(
          TREE,
          parseTree(`console.log("Hello, World!");`),
          matchedTree => parseTree(`console.error("Hi!");`)
        )
      )
    ).to.equal(
      `function sayHelloWorld() {
  console.error("Hi!");
}

sayHelloWorld();`
    );
    expect(
      codeTree.printSource(
        codeTree.transformTree(
          TREE,
          parseTree(`console.log(__);`),
          matchedTree => parseTree(`console.error("Hi!");`)
        )
      )
    ).to.equal(
      `function sayHelloWorld() {
  console.error("Hi!");
}

sayHelloWorld();`
    );
    expect(
      codeTree.printSource(
        codeTree.transformTree(
          TREE,
          parseTree(`non.existent();`),
          matchedTree => parseTree(`console.error("Hi!");`)
        )
      )
    ).to.equal(
      `function sayHelloWorld() {
  console.log("Hello, World!");
}

sayHelloWorld();`
    );
  });
});

function parseTree(code: string): codeTree.nodes.Tree {
  let node = codeTree.typescript.parse(code);
  if (!(node instanceof codeTree.nodes.Tree)) {
    throw new Error();
  }
  return node;
}
