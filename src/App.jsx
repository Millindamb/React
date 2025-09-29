import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/navbar'
import './App.css'
//use context allows us to use any variable anywhere
//to use the counter variable everywhere we use counterContext
import { counterContext } from './context/context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* this value(counter) is avaliable in navbar(to from buttom to from Digit) */}
    {/* <counterContext.Provider value={count}> this will only pass the counter value*/}
        <counterContext.Provider value={{count,setCount}}>
      <Navbar></Navbar>
      <di>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </di>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </counterContext.Provider>
    </>
  )
}

export default App
// this is 