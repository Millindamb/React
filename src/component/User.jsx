import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const params=useParams();
  return (
    <div>
      welcome to the website user:{params.usename}
    </div>
  )
}

export default User
