import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  // let counter = 15

  const addValue = () => {
    //Will be updAted once only
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  }
  const removeValue = () => {
    // setCounter(counter-1)
    setCounter((remCounter) => remCounter - 1)
    setCounter((remCounter) => remCounter - 1)
    setCounter((remCounter) => remCounter - 1)
    setCounter((remCounter) => remCounter - 1)
  }

  return (
    <>
      <h1>React Course with Hitesh {counter}</h1>
      <h2>Counter Value : {counter}</h2>
      <button
      onClick={addValue}
      >Add value</button> {" "}
      <button
      onClick={removeValue}
      >Remove Value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
