import { RowCol } from "./RowCol";

export type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT"

export class Snake {
  /**
   * body: The body of the snake
   * head: body.at(-1)
   * tail: body[0]
   */
  public body: RowCol[]

  /**
   * - The direction of the snake.
   * - Have to be synced with `velocity`
   */
  private direction: Direction = "RIGHT"

  /**
   * - The velocity of the snake
   * - Valid values:
   *      + {row: 0, col: 1} for going RIGHT
   *      + {row: 0, col: -1} for going LEFT
   *      + {row: 1, col: 0} for going DOWN
   *      + {row: -1, col: 0} for goinG UP
   * - Have to be synced with `direction`
   */
  private velocity: RowCol = new RowCol({
    row: 0,
    col: 1,
  })

  /**
   * 
   * @returns the head of the snake
   */
  private getHead(): RowCol {
    return this.body[this.body.length - 1]
  }

  /**
   * Add head to the snake body
   * @param head the head to add
   */
  private addHead(head: RowCol) {
    this.body.push(head)
  }

  /**
   * Remove tail from the snake body
   */
  private removeTail() {
    this.body.shift()
  }

  /**
   * 
   * @returns the next head if continue moving with current velocity
   */
  public getNextHead(): RowCol {
    return this.getHead().getNewRowCol(this.velocity)
  }

  /**
   * - Make the snake move 1 cell
   * - Based on the current velocity
   * - Do not check for `out of board`
   * - Do not check for `eat itself`
   * - Just move
   */
  public tick(removeTail: boolean = true) {
    const head: RowCol = this.getNextHead()
    this.addHead(head)
    if (removeTail) {
      this.removeTail()
    }
  }

  /**
   * - Update direction and velocity
   * - Base on the given direction
   * - Will fail if try to move the opposite direction of current direction
   * - Snake can `move out of board`
   * - Snake can `eat itself`
   * - So, you have to check those conditions before calling this function
   * @param direction the direction to move
   * @returns true if change direction successfully, false if change direction failed
   */
  public changeDirection(direction: Direction): boolean {
    switch (direction) {
      case "UP": {
        if (this.direction === "DOWN") {
          return false
        }
        this.velocity.row = -1;
        this.velocity.col = 0;
        break
      }
      case "DOWN": {
        if (this.direction === "UP") {
          return false
        }
        this.velocity.row = 1;
        this.velocity.col = 0;
        break
      }
      case "LEFT": {
        if (this.direction === "RIGHT") {
          return false
        }
        this.velocity.row = 0;
        this.velocity.col = -1;
        break
      }
      case "RIGHT": {
        if (this.direction === "LEFT") {
          return false
        }
        this.velocity.row = 0;
        this.velocity.col = 1;
        break
      }
    }
    this.direction = direction
    return true
  }

  /**
   * Check if snake body contain the given cell
   * @param cell 
   * @returns true if snake body contain the cell
   */
  public isInBody(cell: RowCol): boolean {
    return !!this.body.find(b => b.row === cell.row && b.col === cell.col)
  }

  public constructor({
    body,
  }: {
    body: RowCol[],
  }) {
    this.body = body
  }

  public getRawBody(): number[] {
    return this.body.reduce<number[]>((acc, cur) => [...acc, cur.row, cur.col], [])
  }
}