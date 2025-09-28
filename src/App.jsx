import React from "react"
import Login from "./component/Login"
import Home from "./component/Home"
import About from "./component/About"
import User from "./component/User"
//latest way to use router
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import "./App.css"
import Navbar from './component/navbar'
//how to make multi-page applicaitons using react router
// so that the page does hot get reload when we go from one page to another
//why router: because when we use <a> tag then it reload the page
// to use router we need to install it first using the command (npm i react-router-dom)
function App() {
  const route=createBrowserRouter([
    {
      path:"/home",
      element:<><Navbar/><Home/></>
    },
    {
      path:"/login",
      element:<><Navbar/><Login/></>
    },
    {
      path:"/about",
      element:<><Navbar/><About/></>
    },
    {
      path:"/user/:usename",
      element:<><Navbar/><User/></>
    } 
  ])
  return (
    <>
    <RouterProvider router={route}/>
    </>
  )
}

export default App
