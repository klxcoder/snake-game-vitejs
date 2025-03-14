import { Board } from "./Board";
import { RowCol } from "./RowCol";
import { Snake } from "./Snake";

export class Game {
  public snake: Snake
  public board: Board
  public food: RowCol
  public velocity: RowCol = new RowCol({
    row: 0,
    col: 1,
  })
  public generateFood(): RowCol {
    const food: RowCol = new RowCol({
      row: 5,
      col: 5,
    })
    return food
  }
  public tick() {
    // const new head = old head + velocity
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