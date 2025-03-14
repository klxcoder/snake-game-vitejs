import { useMemo, useRef } from 'react'
import styles from './App.module.scss'
import { Game } from './models/Game'
import { Snake } from './models/Snake'
import { Board } from './models/Board'
import { RowCol } from './models/RowCol'

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const game = useMemo(() => {
    const snake = new Snake({
      body: new Array(4).fill(1).map((_, index) => (
        new RowCol({ row: 0, col: index })
      )),
    })
    const board = new Board({
      size: new RowCol({ row: 15, col: 20 })
    })
    return new Game({ snake, board })
  }, [])

  return (
    <div className={styles.app}>
      <canvas
        className={styles.canvas}
        style={{
          width: game.board.size.col * 30,
          height: game.board.size.row * 30,
        }}
        ref={canvasRef}
      >
      </canvas>
    </div>
  )
}

export default App
