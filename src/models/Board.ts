import { RowCol } from "./RowCol";

export class Board {
  public size: RowCol
  public constructor({
    size,
  }: {
    size: RowCol,
  }) {
    this.size = size
  }
}