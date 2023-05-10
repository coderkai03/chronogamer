import { useState } from "react";
import { useLocation } from "react-router-dom";

const Play = () => {
    const location = useLocation()
    const [rounds, setRounds] = useState(location.state.numRounds)
    const gameList = location.state.games
    const [currentRound, setCurrentRound] = useState(0);
    const [randGames, setRandGames] = useState(() => {
        const shuffledGames = [...gameList].sort(() => Math.random() - 0.5);
        return shuffledGames.slice(0, rounds);
    });

    const randIndex = () => {
        const rand = Math.floor(Math.random() * randGames.length)
        console.log("rand idx: ", rand)
        return rand
    }

    const handleNextRound = () => {
        if (currentRound < rounds - 1) {
            setCurrentRound(currentRound + 1);
        }
    }

    return (
        <div>
            <h1>Play game: {rounds} rounds</h1>
            <p>{randIndex()}</p>
            {rounds && randGames && randGames
            .filter((game, index) => index === randIndex())
            .map((game) => (
                <div key={game.id}>
                <h2>{game.title}</h2>
                <img src={game.url} width={700}></img>
                <label>{game.year}</label>
                </div>
            ))}
            <button onClick={handleNextRound}>Next Round</button>
        </div>
    );
}
 
export default Play;
