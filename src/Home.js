import { useState } from "react";
import GameRounds from './GameRounds'
import useFetch from "./useFetch";

const Home = () => {
    const {data: games, isLoading, Error} = useFetch("http://localhost:8000/games")
    const [showRounds, setShowRounds] = useState(false);

    const handleShowRounds = () => {
        setShowRounds(true)
    }

    return (
        <div className="home">
            {!showRounds && <div>
                <h1>Play Chronogamer</h1>
                <button onClick={setShowRounds}>Let's go!</button>
            </div>}
            {showRounds && <GameRounds />}
        </div>
    );
}
 
export default Home;