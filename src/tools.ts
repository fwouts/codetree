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

export function findTree(tree: Tree, searchPattern: Node): Tree | null {
  if (treesMatch(tree, searchPattern)) {
    return tree;
  }
  for (let child of tree.children) {
    if (child instanceof Tree) {
      let found = findTree(child, searchPattern);
      if (found) {
        return found;
      }
    }
  }
  return null;
}

export function treesMatch(tree: Tree, searchPattern: Node) {
  if (searchPattern instanceof Space) {
    throw new Error("Unexpected space in search searchPattern.");
  }
  if (getText(searchPattern) === "__") {
    return true;
  }
  if (!(searchPattern instanceof Tree)) {
    return false;
  }
  let treeChildrenWithoutSpaces = tree.children.filter(
    child => !(child instanceof Space)
  );
  let searchPatternChildrenWithoutSpaces = searchPattern.children.filter(
    child => !(child instanceof Space)
  );
  if (
    tree.nodeType !== searchPattern.nodeType ||
    treeChildrenWithoutSpaces.length !==
      searchPatternChildrenWithoutSpaces.length
  ) {
    // TODO: Consider being more flexible, e.g. a function call with a variable number of arguments will not match
    // unless it has the exact same number of arguments.
    return false;
  }
  for (let i = 0; i < treeChildrenWithoutSpaces.length; i++) {
    let child = treeChildrenWithoutSpaces[i];
    let searchPatternChild = searchPatternChildrenWithoutSpaces[i];
    if (child instanceof Tree) {
      if (!treesMatch(child, searchPatternChild)) {
        return false;
      }
    } else if (child instanceof Token && searchPatternChild instanceof Token) {
      if (child.tokenType !== searchPatternChild.tokenType) {
        return false;
      }
      if (searchPatternChild.text.indexOf("__") !== -1) {
        // Ignore text, match anything.
      } else if (child.text !== searchPatternChild.text) {
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
  searchPattern: Node,
  transform: (matchedTree: Tree) => Node
): Node {
  let cloned = cloneTree(tree);
  if (treesMatch(tree, searchPattern)) {
    return transform(cloned);
  }
  for (let i = 0; i < cloned.children.length; i++) {
    let child = cloned.children[i];
    if (child instanceof Tree) {
      cloned.children[i] = transformTree(child, searchPattern, transform);
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
