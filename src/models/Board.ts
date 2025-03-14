import { RowCol } from "./RowCol";

export class Board {
  /**
   * - Define the size of the board
   * - Valid row from `0` to `size.row-1`
   * - Valid col from `0` to `size.col-1`
   */
  public size: RowCol
  public constructor({
    size,
  }: {
    size: RowCol,
  }) {
    this.size = size
  }
}