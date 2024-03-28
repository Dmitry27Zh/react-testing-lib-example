import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState(null)
  const [toggle, setToggle] = useState(false)
  const [value, setValue] = useState('')
  const onClick = () => setToggle((prev) => !prev)
  useEffect(() => {
    setTimeout(() => {
      setData({})
    }, 100)
  }, [])

  return (
    <div>
      <h1 data-testid="value-elem">{value}</h1>
      {toggle && <div data-testid="toggle-elem">toggle</div>}
      {data && <div style={{ color: 'red' }}>data</div>}
      <h2>Hello world</h2>
      <button data-testid="toggle-btn" onClick={onClick}>
        Click me
      </button>
      <input type="text" placeholder="input value..." onChange={(e) => setValue(e.target.value)} />
    </div>
  )
}

export default App
