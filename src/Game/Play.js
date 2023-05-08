import { useState } from "react";
import { withRouter } from 'react-router-dom';

const Play = ({numRounds, games, loading, error}) => {
    const [rounds, setRounds] = useState(numRounds)
    // const {title, url, year} = useState(null)

    console.log('location state:', games);

    if (!games) {
        return <div>No games found.</div>;
    }

    return (
        <div>
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            <h1>Play game: {rounds} rounds</h1>
            {games && games.map((game) => (
                <div>
                    <h2>{game.title}</h2>
                    <img src={game.url} />
                    <label>{game.year}</label>
                </div>
            ))}
        </div>
    );
}
 
export default withRouter(Play);