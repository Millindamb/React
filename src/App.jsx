import { useEffect, useState} from 'react'
import "./App.css"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [name,setname]=useState("");
  // const pressed=()=>{
  //   alert("button is pressed");
  // }
  //when we use input then to take the value inside it we have to 
  // to use a function that will call on change in input and will take the input
  const inputchange=(e)=>{
    setname(e.target.value);
  }
  //to handle multiple input only by using a single function
  //using useState to define multiple variables
  const [login,setlogin]=useState({email:"",phone:"",pass:""})
  //the function which will get called on change by three different inputs
  const multiplechanges=(e)=>{
    //this will set the value of variable according to thier name in the login 
    setlogin({...login,[e.target.name]:e.target.value})
    console.log(login);
  }
  return (<>
      <h1>Event handling in react</h1>
      {/* <button onClick={pressed}>click this </button>
      <button onMouseOver={pressed}>click this </button> */}
      <input type="text" value={name} onChange={inputchange}/>
      <button onClick={()=>{setname("")}}>submit</button><br/>
      <input type="text" name="email" value={login.email} onChange={multiplechanges}/><br/>
      <input type="text" name="phone" value={login.phone} onChange={multiplechanges}/><br/>
      <input type="text" name="pass" value={login.pass} onChange={multiplechanges}/>
    </>
  )
}

export default App
