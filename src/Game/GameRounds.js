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
        console.log("in useEffect")
        async function fetchData(){
          const res = await fetch(url)
          return await res.json()
        }
        fetchData().then(data => {
          setGames(data)
        })
      }, [url])

    // console.log("Selected rounds:", rounds)
    //console.log("Games: ", games)

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
        <div className='content-div'>
            <h2>Select rounds</h2>
            <div className='round-range'>
              <form onSubmit={handleSubmit}>
                  {/* add hints? */}
                  <label style={{ textAlign: 'center', margin: '20px'}}>Rounds: {rounds}</label>
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
        </div>
    );
}
 
export default GameRounds;