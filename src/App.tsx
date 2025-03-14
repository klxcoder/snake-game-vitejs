import { useEffect, useMemo, useRef } from 'react'
import styles from './App.module.scss'
import { Game } from './models/Game'
import { Snake } from './models/Snake'
import { Board } from './models/Board'
import { RowCol } from './models/RowCol'
import { getRandomHSLColor } from './utils/utils'

const CELL_SIZE = 15

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const game = useMemo(() => {
    const snake = new Snake({
      body: new Array(4).fill(1).map((_, index) => (
        new RowCol({ row: 0, col: index })
      )),
    })
    const board = new Board({
      size: new RowCol({ row: 15, col: 30 })
    })
    return new Game({ snake, board })
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      const ctx: CanvasRenderingContext2D | null | undefined = canvasRef.current?.getContext('2d')
      if (!ctx) return
      ctx.clearRect(0, 0, game.board.size.col * CELL_SIZE, game.board.size.row * CELL_SIZE)
      game.snake.body.forEach(b => {
        ctx.fillStyle = getRandomHSLColor()
        ctx.fillRect(b.col * CELL_SIZE, b.row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        console.log('will draw', b)
      })
      ctx.fill()
    }, 100)

    return () => clearTimeout(timeout)
  }, [
    game.board.size.col,
    game.board.size.row,
    game.snake.body
  ])

  return (
    <div className={styles.app}>
      <canvas
        className={styles.canvas}
        style={{
          width: game.board.size.col * CELL_SIZE,
          height: game.board.size.row * CELL_SIZE,
        }}
        ref={canvasRef}
      >
      </canvas>
    </div>
  )
}

export default App
