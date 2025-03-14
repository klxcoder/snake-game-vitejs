import { Board } from "./Board";
import { RowCol } from "./RowCol";
import { Snake } from "./Snake";

export class Game {
  public snake: Snake
  public board: Board
  public food: RowCol
  public generateFood(): RowCol {
    const food: RowCol = new RowCol({
      row: 5,
      col: 5,
    })
    return food
  }

  public isOutOfBoard(head: RowCol): boolean {
    if (head.row < 0) return true
    if (head.row >= this.board.size.row) return true
    if (head.col < 0) return true
    if (head.col >= this.board.size.col) return true
    return false
  }

  public isSelfEaten(head: RowCol): boolean {
    console.log(head)
    return false;
  }

  public isGameOver(head: RowCol) {
    return this.isOutOfBoard(head) || this.isSelfEaten(head)
  }

  public constructor({
    snake,
    board,
  }: {
    snake: Snake,
    board: Board,
  }) {
    this.snake = snake
    this.board = board
    this.food = this.generateFood()
  }
}