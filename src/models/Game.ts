import { Board } from "./Board";
import { RowCol } from "./RowCol";
import { Snake } from "./Snake";

export class Game {
  /**
   * The snake inside the game
   */
  public snake: Snake

  /**
   * The board that the snake can crawling inside
   */
  public board: Board

  /**
   * The food that the snake can eat
   */
  public food: RowCol

  /**
   * 
   * @returns random food
   */
  public generateFood(): RowCol {
    const food: RowCol = new RowCol({
      row: 5,
      col: 5,
    })
    return food
  }

  /**
   * Check if the head is out of board
   * @param head head of the snake
   * @returns true if out of board
   */
  public isOutOfBoard(head: RowCol): boolean {
    if (head.row < 0) return true
    if (head.row >= this.board.size.row) return true
    if (head.col < 0) return true
    if (head.col >= this.board.size.col) return true
    return false
  }

  /**
   * Check if game over
   * @returns true if gave over
   */
  public isGameOver() {
    const head: RowCol = this.snake.getHead()
    return this.isOutOfBoard(head) || this.snake.isSelfEaten()
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