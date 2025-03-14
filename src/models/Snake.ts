import { RowCol } from "./RowCol";

export class Snake {
  // head: body.at(-1)
  // tail: body[0]
  public body: RowCol[]

  public addHead(head: RowCol) {
    this.body.push(head)
  }

  public removeTail() {
    this.body.shift()
  }

  public constructor({
    body,
  }: {
    body: RowCol[],
  }) {
    this.body = body
  }

  public getRawBody(): number[] {
    return this.body.reduce<number[]>((acc, cur) => [...acc, cur.row, cur.col], [])
  }
}