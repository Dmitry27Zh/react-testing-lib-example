import { render, screen } from '@testing-library/react'
import App from './App'

describe('TEST_APP', () => {
  test('renders learn react components', () => {
    render(<App />)
    const helloWorldElement = screen.getByText(/hello world/i)
    const btn = screen.getByRole('button')
    const input = screen.getByPlaceholderText(/input value.../i)
    expect(helloWorldElement).toBeInTheDocument()
    expect(btn).toBeInTheDocument()
    expect(input).toMatchSnapshot()
    screen.debug()
  })
  test('screen api', () => {
    render(<App />)
    const helloWorldElem = screen.queryByText(/hello2/i)
    expect(helloWorldElem).toBeNull()
  })
})
