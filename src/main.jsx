import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//understanding the enjection of variable during the tree formation
//the varibels are enjected at the last of the tree
const anotheruser="Something"
const ReactElement=React.createElement(
  'a',//tag
  {href:'https://google.com'},//Attribbutes
  'click this',
  anotheruser//variable
)
createRoot(document.getElementById('root')).render(
    // <App/>
    ReactElement
)
