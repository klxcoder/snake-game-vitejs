import { RowCol } from "./RowCol";

export class Snake {
  public body: RowCol[]
  public constructor({
    body,
  }: {
    body: RowCol[],
  }) {
    this.body = body
  }
}