import { useState ,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [todo, settodo] = useState([
    { Title: "hi", desc: "hi description" },
    { Title: "hello", desc: "hello description" }
  ]);
  const Todo=({todo})=>{
    return <>
      <div>title={todo.Title}</div>
      <div>discription={todo.desc}</div>
    </>
  }
  return (
    <>
     
    {todo.map(todo=>{
      return <Todo key={todo.Title} todo={todo}></Todo>
    })}

    {todo.map(todo=>{return <div key={todo.Title}>
      <div>title={todo.Title}</div>
      <div>discription={todo.desc}</div>
    </div>
    })}
    </>
  )
}

export default App
