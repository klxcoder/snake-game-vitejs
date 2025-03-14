import { useRef } from 'react'
import styles from './App.module.scss'

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  return (
    <div className={styles.app}>
      <canvas
        className={styles.canvas}
        ref={canvasRef}
      >
      </canvas>
    </div>
  )
}

export default App
