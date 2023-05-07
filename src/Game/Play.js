import { useState } from "react";
import { withRouter } from 'react-router-dom';

const Play = ({numRounds, games}) => {
    const [rounds, setRounds] = useState(numRounds)
    // const {title, url, year} = useState(null)

    console.log('location state:', games);

    return (
        <div>
            <h1>Play game: {rounds} rounds</h1>
            {games.map((game) => (
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