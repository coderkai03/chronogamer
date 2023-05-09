import { useState } from 'react';
import useFetch from '../useFetch';
import {useHistory} from 'react-router-dom'


const GameRounds = () => {
    const [numRounds, setNumRounds] = useState(1)

    
    const history = useHistory()

    // console.log("Selected rounds:", numRounds)
    // console.log("Games: ", games)

    const handleSubmit = (e) => {
        console.log("Selected rounds:", numRounds)
        
        e.preventDefault();
        history.push({
            pathname: '/home/play',
            state: {
                numRounds: numRounds,
            }
        });
      }

    return (
        <div className='add-form'>
            <h1>How many rounds?</h1>
            <form onSubmit={handleSubmit}>
                {/* add hints? */}
                <label>{numRounds} rounds</label>
                <input
                type="range"
                min='1'
                max='5'
                required
                value={numRounds}
                onChange={(e) => setNumRounds(e.target.value)}
                />
                <button>Start game</button>
            </form>
        </div>
    );
}
 
export default GameRounds;