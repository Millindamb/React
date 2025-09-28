import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css"
const Navbar = () => {
  return(
    <div >
      <ul className='nav'>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/login"><li>Login</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/home"><li>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/about"><li>about</li></NavLink>
      </ul>
    </div>
  )
}

export default Navbar
