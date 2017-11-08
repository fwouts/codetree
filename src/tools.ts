import { Node, Space, Token, Tree } from "./nodes";

export function printSource(node: Node): string {
  if (node instanceof Tree) {
    return node.children.map(childNode => printSource(childNode)).join("");
  } else if (node instanceof Token) {
    return node.text;
  } else {
    return node.text;
  }
}

export function findTree(search: Tree, pattern: Node) {
  if (treesMatch(search, pattern)) {
    return true;
  }
  for (let child of search.children) {
    if (child instanceof Tree) {
      if (findTree(child, pattern)) {
        return true;
      }
    }
  }
  return false;
}

export function treesMatch(tree: Tree, pattern: Node) {
  if (pattern instanceof Space) {
    throw new Error("Unexpected space in search pattern.");
  }
  if (getText(pattern) === "__") {
    return true;
  }
  if (!(pattern instanceof Tree)) {
    return false;
  }
  let treeChildrenWithoutSpaces = tree.children.filter(
    child => !(child instanceof Space)
  );
  let patternChildrenWithoutSpaces = pattern.children.filter(
    child => !(child instanceof Space)
  );
  if (
    tree.nodeType !== pattern.nodeType ||
    treeChildrenWithoutSpaces.length !== patternChildrenWithoutSpaces.length
  ) {
    // TODO: Consider being more flexible, e.g. a function call with a variable number of arguments will not match
    // unless it has the exact same number of arguments.
    return false;
  }
  for (let i = 0; i < treeChildrenWithoutSpaces.length; i++) {
    let child = treeChildrenWithoutSpaces[i];
    let patternChild = patternChildrenWithoutSpaces[i];
    if (child instanceof Tree) {
      if (!treesMatch(child, patternChild)) {
        return false;
      }
    } else if (child instanceof Token && patternChild instanceof Token) {
      if (child.tokenType !== patternChild.tokenType) {
        return false;
      }
      if (patternChild.text.indexOf("__") !== -1) {
        // Ignore text, match anything.
      } else if (child.text !== patternChild.text) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

function getText(node: Token | Tree): string {
  if (node instanceof Token) {
    return node.text;
  } else {
    return node.children
      .filter(childNode => !(childNode instanceof Space))
      .map(getText)
      .join("");
  }
}

export function transformTree(
  tree: Tree,
  pattern: Node,
  transform: (matchedTree: Tree) => Node
): Node {
  let cloned = cloneTree(tree);
  if (treesMatch(tree, pattern)) {
    return transform(cloned);
  }
  for (let i = 0; i < cloned.children.length; i++) {
    let child = cloned.children[i];
    if (child instanceof Tree) {
      cloned.children[i] = transformTree(child, pattern, transform);
    }
  }
  return cloned;
}

function cloneTree(tree: Tree): Tree {
  let cloned = new Tree(tree.nodeType);
  cloned.children = tree.children.map(cloneNode);
  return cloned;
}

function cloneNode(node: Node): Node {
  if (node instanceof Tree) {
    return cloneTree(node);
  } else if (node instanceof Token) {
    return new Token(node.tokenType, node.text);
  } else {
    return new Space(node.text);
  }
}
