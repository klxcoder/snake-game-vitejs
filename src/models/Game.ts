import { Board } from "./Board";
import { Snake } from "./Snake";

export class Game {
  public snake: Snake
  public board: Board
  public constructor({
    snake,
    board,
  }: {
    snake: Snake,
    board: Board,
  }) {
    this.snake = snake
    this.board = board
  }
}