import { describe, expect, it, vi } from 'vitest';
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

describe('isGameOver', () => {
  it('isGameOver', () => {
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
    expect(game.isGameOver()).toStrictEqual(false)
    game.snake.changeDirection("UP")
    expect(game.isGameOver()).toStrictEqual(true)
  });
});

describe('generateFood', () => {
  it('returns a valid food position not inside the snake body', () => {
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

    const food = game.generateFood();

    expect(food.row).toBeGreaterThanOrEqual(0);
    expect(food.row).toBeLessThan(10);
    expect(food.col).toBeGreaterThanOrEqual(0);
    expect(food.col).toBeLessThan(10);
  });

  it('returns (-1, -1) if no valid position is found', () => {
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

    vi.spyOn(snake, 'isInBody').mockReturnValue(true);

    const food = game.generateFood();

    expect(food).toEqual(new RowCol({ row: -1, col: -1 }));
  });
});