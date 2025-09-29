import React from 'react'
import Digit from './Digit'
import { useContext } from 'react';
import { counterContext } from '../context/context';

const Button = () => {
  const value=useContext(counterContext);
  return (
    <div>
      <button onClick={()=>{
        value.setCount((count)=>count+1)
      }}><Digit></Digit></button>
    </div>
  )
}

export default Button
