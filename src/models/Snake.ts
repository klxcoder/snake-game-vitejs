import { RowCol } from "./RowCol";

export class Snake {
  // head: body.at(-1)
  // tail: body[0]
  public body: RowCol[]
  public constructor({
    body,
  }: {
    body: RowCol[],
  }) {
    this.body = body
  }
}