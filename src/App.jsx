import { useCallback, useEffect, useState , useRef } from 'react'
import './App.css'

function App() {
  const [length,setlength]=useState(8);
  const [ischar,setChar]=useState(false);
  const [isnum,setNum]=useState(false);
  const [password,setPassword]=useState("");
  const passwordRef=useRef(null);
  const passwordGenerator=useCallback(()=>{
    let pass="";
    let values="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdegjhijklmnopqrstuvwxyz";
    if(ischar)values+="@#$%^&*!=+{}[]()/?~`"
    if(isnum)values+="0123456789"
    for(let i=1;i<=length;i++){
      pass+=values.charAt(Math.floor(Math.random()*values.length));
    }
    setPassword(pass)
    },[ischar,isnum,length,setPassword]
  )
  const copypasstoclipboard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password]);
  useEffect(()=>{passwordGenerator()},[ischar,isnum,length]);
  return (
    <div className='container'>
    <div className='passgencontainer'>
      <h2>Password Generator</h2>
      <div className='mainpart'>
        <input type="text" value={password} readOnly placeholder={password} ref={passwordRef}/>
        <button onClick={copypasstoclipboard}>copy</button>
      </div>
      <div className='selection'>
        <input type="range" min={6} max={24} value={length} onChange={(e)=>{setlength(e.target.value)}}/>len:{length}
        <label><input type="checkbox" defaultChecked={isnum} onChange={()=>{setNum(!isnum)}}/>Numbers</label>
        <label><input type="checkbox" defaultChecked={ischar} onChange={()=>{setChar(!ischar)}}/>Character</label>
      </div>
    </div>
    </div>
  )
}

export default App
