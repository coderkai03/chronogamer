import { useState } from 'react';
import useFetch from './useFetch';
import {useHistory} from 'react-router-dom'


const GameRounds = () => {
    const [numRounds, setNumRounds] = useState(1)
    const [submitted, setSubmitted] = useState(false)

    return (
        <div className='add-form'>
            <h1>How many rounds?</h1>
            <form>
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