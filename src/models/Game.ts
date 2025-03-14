import { Board } from "./Board";
import { RowCol } from "./RowCol";
import { Snake } from "./Snake";

export class Game {
  public snake: Snake
  public board: Board
  public food: RowCol
  public generateFood(): RowCol {
    const food: RowCol = {
      row: 5,
      col: 5,
    }
    return food
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