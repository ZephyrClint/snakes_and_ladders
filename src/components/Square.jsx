import React from 'react'

function Square(props) {
    const user1 = false
    const user2 = false
  return (
    <div className='bg-success' style={{width:"6vw", height:"12vh"}}>
      <h6>{user1 && user2 ? "u1 && u2" : user1 ? "user1" : user2 ? "user2" : ""}</h6>
      <h6> {props.position} </h6>
    </div>
  )
}

export default Square