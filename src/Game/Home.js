import { useState } from "react";
import GameRounds from './GameRounds'
import useFetch from "../useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
    const history = useHistory()

    const [isLogin, setIsLogin] = useState(true)

    const handleLogin = (e) => {
        e.preventDefault();
        history.push('/round-select');
    }

    const handleSignup = (e) => {
        e.preventDefault();
        history.push('/round-select');
    }

    const switchLogin = () => {
        setIsLogin(!isLogin)
    }

    return (
        <div className="home">
            <div className="content-div">
                {isLogin && <div>
                    <h3>LOG IN</h3>
                    <form>
                        <label for="uname">Username</label>
                        <input type="text" id="uname" name="uname"/>
                        <label for="password">Password</label>
                        <input type="text" id="password" name="password"/>
                        <button onClick={handleLogin}>LOG IN</button>
                    </form>

                    <p className="accountSwitch" onClick={switchLogin}><u>SIGN UP</u></p>
                </div>}

                {!isLogin && <div>
                    <h3>SIGN UP</h3>
                    <form>
                        <label for="uname">Username</label>
                        <input type="text" id="uname" name="uname"/>
                        <label for="password">Password</label>
                        <input type="text" id="password" name="password"/>
                        <button onClick={handleSignup}>SIGN UP</button>

                        <p className="accountSwitch" onClick={switchLogin}><u>LOG IN</u></p>
                    </form>
                </div>}
            </div>
        </div>
    );
}
 
export default Home;