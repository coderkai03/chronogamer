import { useState } from "react";
import GameRounds from './GameRounds'
import useFetch from "../useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/round-select');
      }

    return (
        <div className="home">
            <div className="content-div">
                <div>
                    <h3>LOG IN</h3>
                    <form>
                        <label for="uname">Username</label>
                        <input type="text" id="uname" name="uname"/>
                        <label for="password">Password</label>
                        <input type="text" id="password" name="password"/>
                        <button onClick={handleSubmit}>LOG IN</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Home;