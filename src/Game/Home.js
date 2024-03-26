import { useState } from "react";
import GameRounds from './GameRounds'
import useFetch from "../useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import firebaseConfig from '../firebase/firebaseConfig'; // Import the Firebase configuration
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Home = () => {
    const history = useHistory()

    const [isLogin, setIsLogin] = useState(true)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
    
        try {
          const auth = getAuth();
          await signInWithEmailAndPassword(auth, email, password);
          // Redirect user to dashboard or home page upon successful sign-in
          history.push('/round-select');
        } catch (error) {
          // Handle sign-in errors
          setError(error.message);
          window.alert(error)
        }
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        setError(null);
    
        try {
            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, email, password);
            // Redirect user to dashboard or home page upon successful sign-up
            history.push('/round-select');
        } catch (error) {
            // Handle sign-up errors
            setError(error.message);
            window.alert(error)
        }
    }
    

    const switchLogin = () => {
        setIsLogin(!isLogin)
    }

    return (
        <div className="home">
            <div className="content-div">
                <div>
                    {isLogin && <h3>LOG IN</h3>}
                    {!isLogin && <h3>SIGN IN</h3>}
                    <form>
                        <label for="email">Email</label>
                        <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>

                        <label for="password">Password</label>
                        <input type="text" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>

                        {isLogin && <button onClick={handleLogin}>LOG IN</button>}
                        {isLogin && <p className="accountSwitch" onClick={switchLogin}><u>SIGN UP</u></p>}

                        {!isLogin && <button onClick={handleSignup}>SIGN UP</button>}
                        {!isLogin && <p className="accountSwitch" onClick={switchLogin}><u>LOG IN</u></p>}
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Home;