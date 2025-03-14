import { describe, expect, it } from 'vitest';
import { Game } from './Game';
import { Snake } from './Snake';
import { Board } from './Board';
import { RowCol } from './RowCol';

describe('add function', () => {
  it('adds two numbers correctly', () => {
    const snake: Snake = new Snake({
      body: [],
    })
    const board: Board = new Board({
      size: new RowCol({
        row: 10,
        col: 10,
      })
    })
    const game: Game = new Game({ snake, board })
    expect(game).not.toBe(undefined);
  });
});
