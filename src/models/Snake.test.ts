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
    {
      // DOWN and tick
      snake.changeDirection("DOWN")
      snake.tick()
      expect(snake.getRawBody()).toStrictEqual([0, 1, 0, 2, 0, 3, 1, 3])
      snake.changeDirection("UP")
    }
    {
      // RIGHT and tick
      snake.changeDirection("RIGHT")
      snake.tick()
      expect(snake.getRawBody()).toStrictEqual([0, 2, 0, 3, 1, 3, 1, 4])
      snake.changeDirection("LEFT")
    }
    {
      // UP and tick
      snake.changeDirection("UP")
      snake.tick()
      expect(snake.getRawBody()).toStrictEqual([0, 3, 1, 3, 1, 4, 0, 4])
      snake.changeDirection("DOWN")
    }
    {
      // LEFT and tick
      snake.changeDirection("LEFT")
      snake.tick()
      expect(snake.getRawBody()).toStrictEqual([1, 3, 1, 4, 0, 4, 0, 3])
      snake.changeDirection("RIGHT")
    }
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
