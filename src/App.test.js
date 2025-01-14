import { render, screen, fireEvent } from '@testing-library/react'
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
  test('screen api', async () => {
    render(<App />)
    const helloWorldElem = screen.queryByText(/hello2/i)
    expect(helloWorldElem).toBeNull()
    screen.debug()
    const helloWorldElem2 = await screen.findByText(/data/i)
    expect(helloWorldElem2).toBeInTheDocument()
    screen.debug()
    expect(helloWorldElem2).toHaveStyle({ color: 'red' })
  })
  test('click event', () => {
    render(<App />)
    const btn = screen.getByTestId('toggle-btn')
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
  })
  test('input event', () => {
    render(<App />)
    const input = screen.getByPlaceholderText(/input value.../i)
    const valueElem = screen.queryByTestId('value-elem')
    const testValue = 'afafsfs'
    expect(valueElem).toContainHTML('')
    fireEvent.input(input, {
      target: { value: testValue },
    })
    expect(valueElem).toContainHTML(testValue)
  })
})
