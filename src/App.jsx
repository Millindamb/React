import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor]=useState('grey');
  return (
    <div
  style={{
    backgroundColor: color,
    height: "100vh",
    width: "100vw"
  }}>
      <div className='Buttons'>
        <button onClick={()=>{setColor('black')}}>black</button>
        <button onClick={()=>{setColor('yellow')}}>yellow</button>
        <button onClick={()=>{setColor('red')}}>red</button>
        <button onClick={()=>{setColor('blue')}}>blue</button>
        <button onClick={()=>{setColor('purple')}}>purple</button>
        <button onClick={()=>{setColor('lightpink')}}>pink</button>
        <button onClick={()=>{setColor('lightcyan')}}>cyan</button>
        </div>
    </div>
  )
}

export default App
