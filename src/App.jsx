import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { use } from 'react'

// why we use useMemo?
//there are some Expensive Computation in our code that are very time and taking
//so whenever a variable is changed then this expensive computation get executed 
//to prevent this expensive computation to get execute every time when we change something
//then we use useMemo as its prevents this expensive computation to get exectued unnecessary

const nums=new Array(30_000_000).fill(0).map((_,i)=>{
  return {
    index : i,
    isMagical : i===29_000_000
  }
})

function App() {
  const [count, setCount] = useState(0);
  const [number,setnumber]=useState(nums);

  // this is the example of expensive computation
  // const magical=number.find(item=>item.isMagical===true);

  // this will save the value returned and will not recall the number during rerendering
  // const magical = useMemo(()=>number.find(item=>item.isMagical===true),[]);//this will only calcualte the magical once when first rerender
  
  const magical = useMemo(()=>number.find(item=>item.isMagical===true),[number]);//this will only calcualte the magical whenever number is changed

  return (
    <>
      <div>
        <div>magical number is : {magical.index}</div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {setCount((count) => count + 1)
          if(count==10){
            setnumber(new Array(10_000_000).fill(0).map((_,i)=>{
          return {
          index : i,
          isMagical : i===9_000_000
        }
      }))
          }
        }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App