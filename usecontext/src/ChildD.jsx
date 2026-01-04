import React, { useContext } from 'react'
import { UserContext } from './App1';

 const user = useContext(UserContext);

function ChildD() {
  return (
    <div>
      <h2>My Name is{user.name}</h2>
    </div>
  )
}

export default ChildD


