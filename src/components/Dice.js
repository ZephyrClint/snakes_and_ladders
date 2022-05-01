import React, {useState} from 'react'
import { Button } from 'react-bootstrap'

function Dice() {

    const [user1Roll, setUser1Roll] = useState(0);
    const [user2Roll, setUser2Roll] = useState(0);
    const message = ["You have not rolled yet", "You have rolled once"]

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <Button
                        onClick={
                            () => {
                                setUser1Roll((count)=> count = count + 1)
                            }
                        }
                        disabled = {user1Roll === 1}
                        variant="outline-dark"
                    >
                        User1, Click to Roll
                    </Button>
                    <h1>
                        {message[user1Roll]}
                    </h1>
                </div>
            
                <div className='col-md'>
                    <Button
                        onClick={
                            () => {
                                setUser2Roll((count)=> count = count + 1)
                            }
                        }
                        disabled = {user2Roll === 1}
                        variant="outline-dark"
                    >
                        User2, Click to Roll
                    </Button>
                    <h1>
                        {message[user2Roll]}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Dice
