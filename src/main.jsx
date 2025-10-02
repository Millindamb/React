import React from 'react';
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import Chai from './Chai.jsx'

//as this is a function that is of JSX and this will convert
//into js after parshing to from tree structure
// before parshing form
function MyApp(){
  return(
    <div>
      this is a div
    </div>
  )
}

// theory as the my app convert into a js form just like the react element
//so if we write the react form directly (after parshing form) then it may also run
//but this will not run as there is a difference between the format

//after parshing form(this will not run due to syntax)
const Reactelement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click this to open google'
};

// sutaible example of Reactelement with perfect syntax
const Reactelement2=React.createElement(
  'a',//tag name
  {href:"https://google.com",target:"_blank"},//Attributed
  'click this to visit'//inner TEXT
)

//AnotherElement (suatible syntax)
const anotherElement=(//JSX
  <a href='https://google.com' target='_blank'>visit google</a>
)
createRoot(document.getElementById('root')).render(
    // <MyApp/>
    // Reactelement(); //this will only run when we creat a custom render dunction
    // anotherElement //this will run because of the syntax as the render is expecting differnt arguments
    Reactelement2
)
