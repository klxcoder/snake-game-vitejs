import { RowCol } from "./RowCol";

export class Snake {
  // head: body.at(-1)
  // tail: body[0]
  public body: RowCol[]
  public velocity: RowCol = new RowCol({
    row: 0,
    col: 1,
  })

  public getHead(): RowCol {
    return this.body[this.body.length - 1]
  }

  public addHead(head: RowCol) {
    this.body.push(head)
  }

  public removeTail() {
    this.body.shift()
  }

  public tick() {
    const head: RowCol = this.getHead().getNewRowCol(this.velocity)
    this.removeTail()
    this.addHead(head)
  }

  public goUp() {
    this.velocity.row = -1;
    this.velocity.col = 0;
    this.tick()
  }

  public goDown() {
    this.velocity.row = 1;
    this.velocity.col = 0;
    this.tick()
  }

  public turnLeft() {
    this.velocity.row = 0;
    this.velocity.col = -1;
    this.tick()
  }

  public turnRight() {
    this.velocity.row = 0;
    this.velocity.col = 1;
    this.tick()
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