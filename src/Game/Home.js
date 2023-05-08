import { useState } from "react";
import GameRounds from './GameRounds'
import useFetch from "../useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/home/round-select');
      }

    return (
        <div className="home">
            <div>
                <h1>Play Chronogamer</h1>
                <button onClick={handleSubmit}>Let's go!</button>
            </div>
        </div>
    );
}
 
export default Home;