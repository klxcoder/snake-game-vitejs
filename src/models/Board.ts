import { RowCol } from "./RowCol";

export class Board {
  // valid row from `0` to `size.row-1`
  // valid col from `0` to `size.col-1`
  public size: RowCol
  public constructor({
    size,
  }: {
    size: RowCol,
  }) {
    this.size = size
  }
}