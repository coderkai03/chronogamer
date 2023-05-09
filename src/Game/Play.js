import { useState } from "react";
import { withRouter } from 'react-router-dom';
import useFetch from "../useFetch";

const Play = (numRounds) => {
    const {data: games, isLoading, Error} = useFetch("http://localhost:8000/games")
    const [rounds, setRounds] = useState(numRounds)

    // Randomize order of games array
    const compareRandom = () => Math.random() - 0.5;
    const randoGames = games.sort(compareRandom)

    console.log('location state:', games);

    if (!games) {
        return <div>No games found.</div>;
    }

    return (
        <div>
            {Error && <div>{Error}</div>}
            {isLoading && <div>Loading...</div>}
            <h1>Play game: {rounds} rounds</h1>
            {randoGames && randoGames.map((game) => (
                <div key={game.id}>
                    <h2>{game.title}</h2>
                    <img src={game.url} />
                    <label>{game.year}</label>
                </div>
            ))}
        </div>
    );
}
 
export default withRouter(Play);