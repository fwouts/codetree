import * as ts from "typescript";

import { Node, Space, Token, Tree } from "./nodes";

export function parse(source: string): Tree {
  let sourceFile = ts.createSourceFile(
    "code.ts",
    source,
    ts.ScriptTarget.Latest,
    true
  );
  let tree = createSourceTree(sourceFile, source)[0] as Tree;
  return findTopTree(tree);
}

function findTopTree(tree: Tree): Tree {
  let childrenWithoutSpaces = tree.children.filter(
    child => !(child instanceof Space)
  );
  if (childrenWithoutSpaces.length !== 1) {
    return tree;
  }
  let onlyChild = childrenWithoutSpaces[0];
  if (onlyChild instanceof Tree) {
    return findTopTree(onlyChild);
  } else {
    return tree;
  }
}

function createSourceTree(
  tsNode: ts.Node,
  fullCode: string,
  codePosition: { charIndex: number } = {
    charIndex: 0
  }
): Node[] {
  if (!ts.isToken(tsNode)) {
    let childCount = tsNode.getChildCount();
    let tree = new Tree(tsNode.kind);
    for (let child of tsNode.getChildren()) {
      let childNodes = createSourceTree(child, fullCode, codePosition);
      let firstChildNode = childNodes[0];
      if (firstChildNode instanceof Tree) {
        while (firstChildNode.children[0] instanceof Space) {
          tree.children.push(firstChildNode.children[0]);
          firstChildNode.children = firstChildNode.children.slice(1);
        }
      }
      tree.children.push(...childNodes);
    }
    return [tree];
  } else {
    let nodes: Node[] = [];
    let fullText = tsNode.getFullText();
    let tokenText = tsNode.getText();
    if (fullText.trim().length === 0) {
      nodes.push(new Space(fullText));
      codePosition.charIndex += fullText.length;
    } else {
      let tokenPositionInFullText = fullText.indexOf(tokenText);
      if (tokenPositionInFullText > 0) {
        nodes.push(new Space(fullText.substr(0, tokenPositionInFullText)));
        codePosition.charIndex += tokenPositionInFullText;
      }
      nodes.push(new Token(tsNode.kind, tokenText));
      codePosition.charIndex += tokenText.length;
      if (tokenPositionInFullText + tokenText.length !== fullText.length) {
        let remainingText = fullText.substr(
          tokenPositionInFullText + tokenText.length
        );
        nodes.push(new Space(remainingText));
        codePosition.charIndex += remainingText.length;
      }
    }
    return nodes;
  }
}
