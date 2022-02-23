import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [value, setValue] = useState('')

  const doSomething = (e) => {
    e.preventDefault()
    setCounter(counter + 1)
  }

  return (
    <div className='App'>
      <form>
        <label htmlFor='some-input'>Some Input:</label>
        <input
          id='some-input'
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit' onClick={doSomething}>
          Submit
        </button>
        <h1>{counter}</h1>
      </form>
    </div>
  )
}

export default App
