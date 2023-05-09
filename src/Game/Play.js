import { useState } from "react";
import { useLocation } from "react-router-dom";

const Play = () => {
    const location = useLocation()
    const [rounds, setRounds] = useState(location.state.numRounds)
    const gameList = location.state.games
    const isLoad = location.state.isLoading
    // const {title, url, year} = useState(null)

    // console.log("ROUNDS: ", gameList)

    // Randomize order of games array
    const compareRandom = () => Math.random() - 0.5;
    const randoGames = gameList.sort(compareRandom)

    console.log('location state:', gameList);

    const gradeRound = (ID) => {
        randoGames.splice(ID, 1)
    }

    // if (!games) {
    //     return <div>No games found.</div>;
    // }

    return (
        <div>
            {/* {Error && <div>{Error}</div>} */}
            {/* {isLoading && <div>Loading...</div>} */}
            <h1>Play game: {rounds} rounds</h1>
            {randoGames && randoGames.map((game) => (
                <div key={game.id}>
                    <h2>{game.title}</h2>
                    <img src={game.url}></img>
                    <p>{game.url}</p>
                    <label>{game.year}</label>
                </div>
            ))}
        </div>
    );
}
 
export default Play;