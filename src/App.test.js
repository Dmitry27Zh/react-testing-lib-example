import { render, screen } from '@testing-library/react'
import App from './App'

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
