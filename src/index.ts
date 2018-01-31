import * as antlr from "./antlr";
import * as nodes from "./nodes";
import * as typescript from "./typescript";

export { antlr, typescript, nodes };

export function printSource(node: nodes.Node): string {
  if (node instanceof nodes.Tree) {
    return node.children.map(childNode => printSource(childNode)).join("");
  } else if (node instanceof nodes.Token) {
    return node.text;
  } else {
    return node.text;
  }
}

export function findTree(
  tree: nodes.Tree,
  searchPattern: nodes.Node
): nodes.Tree | null {
  if (treesMatch(tree, searchPattern)) {
    return tree;
  }
  for (let child of tree.children) {
    if (child instanceof nodes.Tree) {
      let found = findTree(child, searchPattern);
      if (found) {
        return found;
      }
    }
  }
  return null;
}

function treesMatch(tree: nodes.Tree, searchPattern: nodes.Node) {
  if (searchPattern instanceof nodes.Space) {
    throw new Error("Unexpected space in search searchPattern.");
  }
  if (getText(searchPattern) === "__") {
    return true;
  }
  if (!(searchPattern instanceof nodes.Tree)) {
    return false;
  }
  let treeChildrenWithoutSpaces = tree.children.filter(
    child => !(child instanceof nodes.Space)
  );
  let searchPatternChildrenWithoutSpaces = searchPattern.children.filter(
    child => !(child instanceof nodes.Space)
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
    if (child instanceof nodes.Tree) {
      if (!treesMatch(child, searchPatternChild)) {
        return false;
      }
    } else if (
      child instanceof nodes.Token &&
      searchPatternChild instanceof nodes.Token
    ) {
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

function getText(node: nodes.Token | nodes.Tree): string {
  if (node instanceof nodes.Token) {
    return node.text;
  } else {
    return node.children
      .filter(childNode => !(childNode instanceof nodes.Space))
      .map(getText)
      .join("");
  }
}

export function transformTree(
  tree: nodes.Tree,
  searchPattern: nodes.Node,
  transform: (matchedTree: nodes.Tree) => nodes.Node
): nodes.Node {
  let cloned = cloneTree(tree);
  if (treesMatch(tree, searchPattern)) {
    return transform(cloned);
  }
  for (let i = 0; i < cloned.children.length; i++) {
    let child = cloned.children[i];
    if (child instanceof nodes.Tree) {
      cloned.children[i] = transformTree(child, searchPattern, transform);
    }
  }
  return cloned;
}

function cloneTree(tree: nodes.Tree): nodes.Tree {
  let cloned = new nodes.Tree(tree.nodeType);
  cloned.children = tree.children.map(cloneNode);
  return cloned;
}

function cloneNode(node: nodes.Node): nodes.Node {
  if (node instanceof nodes.Tree) {
    return cloneTree(node);
  } else if (node instanceof nodes.Token) {
    return new nodes.Token(node.tokenType, node.text);
  } else {
    return new nodes.Space(node.text);
  }
}
