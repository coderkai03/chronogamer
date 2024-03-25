import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Game from "./Game";
import { useEffect, useState } from "react";
import { type } from "@testing-library/user-event/dist/type";

const Results = () => {
    const location = useLocation()

    const finalRounds = location.state.rounds
    const finalPoints = location.state.points
    const randGames = location.state.randGames
    const userGuesses = location.state.guesses
    const accuracies = location.state.accuracies

    const [score, setScore] = useState(0)

    console.log('RESULTS ROUNDS: ', finalRounds)
    console.log('RESULTS POINTS: ', finalPoints)
    console.log('RandGames: ', randGames)
    console.log('User guesses: ', userGuesses)

    const changeColor = (index) => {
        const diff = Math.abs(randGames[index].year - userGuesses[index]);
        if (diff <= 3) {
            return 'green';
        } else if (diff <= 7) {
            return 'orange';
        } else {
            return 'red';
        }
    }

    const changeTrackColor = (index, maxYear) => {
        const diff = Math.abs(randGames[index].year - userGuesses[index]);
        let color;
        if (diff <= 3) {
            color = 'green';
        } else if (diff <= 7) {
            color = 'orange';
        } else {
            color = 'red';
        }
        const left = 100 * ((Math.min(randGames[index].year, userGuesses[index]) - 2000) / (maxYear-2000))
        const right = 100 * ((Math.max(randGames[index].year, userGuesses[index]) - 2000) / (maxYear-2000))

        const gradientColor = `linear-gradient(to right, black ${left}%, ${color} ${left}%, ${color} ${right}%, black ${right}%, black 100%)`;
        return gradientColor;
    };
    
    
    const calcScore = (array) => {
        // Check if array is defined and not empty
        if (Array.isArray(array) && array.length > 0) {
            // If array is not empty, calculate the sum
            return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)/accuracies.length;
        } else {
            // If array is undefined or empty, return 0 or any default value you prefer
            return 0;
        }
    }
    

    useEffect(() => {
        setScore(calcScore(accuracies))
    }, [])
    

    return (
        <div className="content-div">
            <h2>Results</h2>
            <p className="totalScore">Total Score: {(score*100).toFixed(1)}%</p>

            <div className="gameResults">
                {randGames && randGames.map((game, index) => (
                    <div className="gameItem" key={index}>
                        <Game
                            key={index}
                            id={game.id}
                            title={game.title}
                            url={game.url}
                            year={game.year}
                        />
                        <div className="yearResults">
                            <p style={{ color: changeColor(index) }}>Guess: {userGuesses[index]}</p>
                            <p style={{ color: changeColor(index) }}>{(accuracies[index] * 100).toFixed(1)}%</p>
                            <p>Correct: {game.year}</p>
                        </div>
                        <input
                            className="custom-range input-range"
                            style={{background: changeTrackColor(index, 2023)}}
                            id={`answerTrack${index}`}
                            type="range"
                            min={2000}
                            max={2023}
                            required
                            value={userGuesses[index]}
                            disabled={true}
                            // style={{ backgroundColor: changeColor(index) }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Results;