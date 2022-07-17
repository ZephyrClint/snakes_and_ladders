import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Dice() {
    const [value, setValue] = useState(null)
    function roll() {
        let random = Math.round(Math.random()*10)
        if(random <= 6 && random > 0)
            setValue(random)
        else if(random > 6)
            setValue(random - 6)
        else
            setValue(random + 3)
    }

  return (
    <div>
        <Button className='mt-3'
        onClick={()=>{
            roll()
        }}> {value} </Button>
    </div>
  )
}

export default Dice