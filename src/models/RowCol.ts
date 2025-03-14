export class RowCol {
  public row: number
  public col: number
  public constructor({
    row,
    col,
  }: {
    row: number,
    col: number,
  }) {
    this.row = row
    this.col = col
  }
  public getNewRowCol(delta: RowCol): RowCol {
    const newRowCol: RowCol = new RowCol({
      row: this.row + delta.row,
      col: this.col + delta.col,
    })
    return newRowCol
  }
}