import { describe, it, expect, vi } from 'vitest'
import { createRoot } from 'react-dom/client'

const mockRender = vi.fn()

vi.mock('react-dom/client', () => ({
  createRoot: vi.fn(() => ({
    render: mockRender,
  })),
}))

describe('main.tsx', () => {
  it('renders without crashing', async () => {
    const rootElement = document.createElement('div')
    rootElement.id = 'root'
    document.body.appendChild(rootElement)

    await import('./main')

    expect(createRoot).toHaveBeenCalledWith(rootElement)
    expect(mockRender).toHaveBeenCalled()
  })
})
