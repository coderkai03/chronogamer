import { useEffect, useState } from 'react';
import useFetch from '../useFetch';
import {useHistory} from 'react-router-dom'
import axios from 'axios'



// const api = axios.create({
//     baseURL: url
// })

// var games = await axios.get('http://localhost:8000/games')
            // try {
            //     var {data: games, isLoading, Error} = await useFetch('http://localhost:8000/games')
            //     console.log("ALL GAMES: ", games)
            // }
            // catch (error) {
            //     console.log(`Error: ${error}`)


const GameRounds = () => {
    const [rounds, setRounds] = useState(1)
    const [url, setUrl] = useState('http://localhost:8000/games')
    const [games, setGames] = useState([])
    const history = useHistory()

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url);
            const data = await res.json();
            setGames(data);
        }
        fetchData();
      }, [url])

    // console.log("Selected rounds:", rounds)
    console.log("Games: ", games)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('History: ', history)
        console.log('Rounds: ', rounds)
        history.push({
            pathname: '/play',
            state: {
                numRounds: rounds,
                games: games
                // loading: isLoading,
                // error: Error
            }
        });
        
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
                max={games.length}
                required
                value={rounds}
                onChange={(e) => setRounds(e.target.value)}
                />
                <button>Start game</button>
            </form>
        </div>
    );
}
 
export default GameRounds;