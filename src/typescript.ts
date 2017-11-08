import * as ts from "typescript";

import { Node, Space, Token, Tree } from "./nodes";

export function parse(source: string, syntaxKind: number): Node {
  let sourceFile = ts.createSourceFile(
    "code.ts",
    source,
    ts.ScriptTarget.Latest,
    true
  );
  let tsNode = findSyntaxKind(sourceFile, syntaxKind);
  if (!tsNode) {
    throw new Error("Could not find a node of kind " + syntaxKind);
  }
  return createSourceTree(tsNode, source)[0];
}

function findSyntaxKind(tsNode: ts.Node, syntaxKind: number): ts.Node | null {
  if (tsNode.kind === syntaxKind) {
    return tsNode;
  }
  for (let child of tsNode.getChildren()) {
    let foundNode = findSyntaxKind(child, syntaxKind);
    if (foundNode) {
      return foundNode;
    }
  }
  return null;
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
    let tree = new Tree();
    for (let child of tsNode.getChildren()) {
      let childNodes = createSourceTree(child, fullCode, codePosition);
      let firstChildNode = childNodes[0];
      if (firstChildNode instanceof Tree) {
        while (firstChildNode.children[0] instanceof Space) {
          tree.children.push(firstChildNode.children[0]);
          firstChildNode.children.splice(1);
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
