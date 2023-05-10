import { useState } from 'react';
import useFetch from '../useFetch';
import {useHistory} from 'react-router-dom'
// import Play from './Play';


const GameRounds = () => {
    const [rounds, setRounds] = useState(1)
    const {data: games, isLoading, Error} = useFetch('http://localhost:8000/games')
    
    const history = useHistory()

    // console.log("Selected rounds:", rounds)
    // console.log("Games: ", games)

    const handleSubmit = (e) => {
        console.log("Selected rounds:", rounds)
        console.log("Games: ", games)
        e.preventDefault();
        history.push({
            pathname: '/home/play',
            state: {
                numRounds: rounds,
                games: games,
                loading: isLoading,
                error: Error
            }
        });
        console.log('History: ', history)
      }

    return (
        <div className='add-form'>
            <h1>How many rounds?</h1>
            <form onSubmit={handleSubmit}>
                {/* add hints? */}
                <label>{rounds} rounds</label>
                <input
                type="range"
                min='1'
                max='5'
                required
                value={rounds}
                onChange={(e) => setRounds(e.target.value)}
                />
                <button>Start game</button>
            </form>
            {/* {games && games.map((game) => (
                <div key={game.id}>
                    <h2>{game.title}</h2>
                    <img src={game.url} />
                    <label>{game.year}</label>
                </div>
            ))} */}
        </div>
    );
}
 
export default GameRounds;