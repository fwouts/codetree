export type Node = Tree | Token | Space;

export class Tree {
  public children: Node[] = [];
}

export class Token {
  public tokenType: number;
  public text: string;

  constructor(tokenType: number, text: string) {
    this.tokenType = tokenType;
    this.text = text;
  }
}

export class Space {
  public text: string;

  constructor(text: string) {
    this.text = text;
  }
}
