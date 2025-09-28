import { useEffect, useState} from 'react'
import "./App.css"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const url="https://jsonplaceholder.typicode.com/posts";
  const [data,setdata]=useState(null);
  const [showbtn,setshowbtn]=useState(true);
  const fetchdata=async()=>{
      const rawdata=await fetch(url);
      const impdata=await rawdata.json();
      setdata(impdata);
    }
  return (<>
  <div className='cards'>
    {data && data.map(detail => (
          <div key={detail.title} className='card'>
            <div className='ids'><span>User ID:{detail.userId}</span><span>ID :{detail.id}</span></div>
            <div>Title:</div>
            <div>{detail.title}</div>
          </div>
        ))}
     {showbtn && <button className='btn' onClick={()=>{
      setshowbtn(!showbtn);fetchdata()}
     }>get data</button>}
  </div>
    </>
  )
}

export default App
