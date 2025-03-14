import { getRandomInt } from "../utils/utils";
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
    let maxN = 1000;
    while (maxN--) {
      const row = getRandomInt(0, this.board.size.row - 1)
      const col = getRandomInt(0, this.board.size.col - 1)
      const cell: RowCol = new RowCol({ row, col })
      if (!this.snake.isInBody(cell)) {
        return cell
      }
    }
    return new RowCol({
      row: -1,
      col: -1,
    })
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