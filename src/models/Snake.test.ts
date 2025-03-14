import { describe, expect, it } from 'vitest';
import { Snake } from './Snake';
import { RowCol } from './RowCol';

describe('tick', () => {
  it('tick, go', () => {
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
    snake.go("DOWN")
    expect(snake.getRawBody()).toStrictEqual([0, 2, 0, 3, 0, 4, 1, 4])
    snake.tick()
    expect(snake.getRawBody()).toStrictEqual([0, 3, 0, 4, 1, 4, 2, 4])
  });
  it('isSelfEaten', () => {
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
    expect(snake.isSelfEaten()).toStrictEqual(false)
    snake.go("DOWN")
    console.log(snake.getRawBody())
    expect(snake.isSelfEaten()).toStrictEqual(false)
    snake.go("LEFT")
    console.log(snake.getRawBody())
    expect(snake.isSelfEaten()).toStrictEqual(false)
    snake.go("UP")
    console.log(snake.getRawBody())
    expect(snake.isSelfEaten()).toStrictEqual(true)
  });
});
