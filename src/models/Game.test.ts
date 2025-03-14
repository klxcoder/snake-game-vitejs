import { describe, expect, it } from 'vitest';
import { Game } from './Game';
import { Snake } from './Snake';
import { Board } from './Board';
import { RowCol } from './RowCol';

describe('add function', () => {
  it('adds two numbers correctly', () => {
    const snake: Snake = new Snake({
      body: new Array(4).fill(1).map((_, index) => {
        return new RowCol({
          row: 0,
          col: index,
        })
      }),
    })
    const board: Board = new Board({
      size: new RowCol({
        row: 10,
        col: 10,
      })
    })
    const game: Game = new Game({ snake, board })
    expect(game.snake.getRawBody()).toStrictEqual([0, 0, 0, 1, 0, 2, 0, 3])
    game.tick()
    expect(game.snake.getRawBody()).toStrictEqual([0, 0, 0, 1, 0, 2, 0, 3, 0, 4])
  });
});
