import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/context';
const Digit = () => {
  const value=useContext(counterContext);
  return (
    <div>
      <span>{value.count}</span>
    </div>
  )
}

export default Digit
