import { describe, expect, it } from 'vitest';
import { Snake } from './Snake';
import { RowCol } from './RowCol';

describe('tick', () => {
  it('tick, changeDirection', () => {
    const snake: Snake = new Snake({
      body: new Array(4).fill(1).map((_, index) => {
        return new RowCol({
          row: 0,
          col: index,
        })
      }),
    })
    expect(snake.getRawBody()).toStrictEqual([0, 0, 0, 1, 0, 2, 0, 3])
    snake.tick()
    expect(snake.getRawBody()).toStrictEqual([0, 1, 0, 2, 0, 3, 0, 4])
    snake.changeDirection("DOWN")
    expect(snake.getRawBody()).toStrictEqual([0, 2, 0, 3, 0, 4, 1, 4])
    snake.tick()
    expect(snake.getRawBody()).toStrictEqual([0, 3, 0, 4, 1, 4, 2, 4])
  });
  it('isInBody', () => {
    const snake: Snake = new Snake({
      body: new Array(5).fill(1).map((_, index) => {
        return new RowCol({
          row: 0,
          col: index,
        })
      }),
    })
    expect(snake.getRawBody()).toStrictEqual([0, 0, 0, 1, 0, 2, 0, 3, 0, 4])
    console.log(snake.getRawBody())
    expect(snake.isInBody(new RowCol({
      row: 0,
      col: 0,
    }))).toStrictEqual(true)
    expect(snake.isInBody(new RowCol({
      row: 0,
      col: 4,
    }))).toStrictEqual(true)
    expect(snake.isInBody(new RowCol({
      row: 0,
      col: 5,
    }))).toStrictEqual(false)
  });
});
