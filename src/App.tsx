import { useEffect, useMemo, useRef } from 'react'
import styles from './App.module.scss'
import { Game } from './models/Game'
import { Snake } from './models/Snake'
import { Board } from './models/Board'
import { RowCol } from './models/RowCol'
import { getRandomHSLColor } from './utils/utils'

const CELL_SIZE = 20
const TICK_RATE = 100

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const game = useMemo(() => {
    const snake = new Snake({
      body: new Array(4).fill(1).map((_, index) => (
        new RowCol({ row: 0, col: index })
      )),
    })
    const board = new Board({
      size: new RowCol({ row: 25, col: 30 })
    })
    return new Game({ snake, board })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const ctx: CanvasRenderingContext2D | null | undefined = canvasRef.current?.getContext('2d')
      if (!ctx) return
      // clear canvas
      ctx.clearRect(0, 0, game.board.size.col * CELL_SIZE, game.board.size.row * CELL_SIZE)
      // draw snake body
      game.snake.body.forEach(b => {
        ctx.fillStyle = getRandomHSLColor()
        ctx.fillRect(b.col * CELL_SIZE, b.row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      })
      // draw food
      ctx.fillStyle = getRandomHSLColor()
      ctx.fillRect(game.food.col * CELL_SIZE, game.food.row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      //
      if (game.isGameOver()) {
        clearInterval(interval)
        // Draw text Game Over
        ctx.font = '50px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(
          'Game Over',
          game.board.size.col * CELL_SIZE / 2,
          game.board.size.row * CELL_SIZE / 2,
        );
      } else {
        const nextHead: RowCol = game.snake.getNextHead()
        const headIsFood: boolean = nextHead.row === game.food.row && nextHead.col === game.food.col
        if (headIsFood) {
          game.snake.tick(false) // do not remove tail
          game.food = game.generateFood()
        } else {
          game.snake.tick(true) // remove tail
        }
      }
    }, TICK_RATE)

    return () => clearInterval(interval)
  }, [
    game.board.size.col,
    game.board.size.row,
    game.snake.body,
    game.snake,
    game,
  ])

  useEffect(() => {
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown": {
          game.snake.changeDirection("DOWN")
          break
        }
        case "ArrowUp": {
          game.snake.changeDirection("UP")
          break
        }
        case "ArrowLeft": {
          game.snake.changeDirection("LEFT")
          break
        }
        case "ArrowRight": {
          game.snake.changeDirection("RIGHT")
          break
        }
      }
    })
  }, [game.snake])

  return (
    <div className={styles.app}>
      <canvas
        className={styles.canvas}
        width={game.board.size.col * CELL_SIZE}
        height={game.board.size.row * CELL_SIZE}
        ref={canvasRef}
      >
      </canvas>
    </div>
  )
}

export default App
