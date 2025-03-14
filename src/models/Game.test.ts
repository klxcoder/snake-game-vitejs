import { describe, expect, it } from 'vitest';
import { Game } from './Game';
import { Snake } from './Snake';
import { Board } from './Board';
import { RowCol } from './RowCol';

describe('isOutOfBoard', () => {
  it('isOutOfBoard', () => {
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
    expect(game.isOutOfBoard(new RowCol({
      row: 0,
      col: 0,
    }))).toStrictEqual(false)
    expect(game.isOutOfBoard(new RowCol({
      row: 9,
      col: 9,
    }))).toStrictEqual(false)
    expect(game.isOutOfBoard(new RowCol({
      row: -1,
      col: 0,
    }))).toStrictEqual(true)
    expect(game.isOutOfBoard(new RowCol({
      row: 0,
      col: -1,
    }))).toStrictEqual(true)
    expect(game.isOutOfBoard(new RowCol({
      row: 10,
      col: 0,
    }))).toStrictEqual(true)
    expect(game.isOutOfBoard(new RowCol({
      row: 0,
      col: 10,
    }))).toStrictEqual(true)
  });
});
