import Navbar from './Navbar';
import Home from './Game/Home'
import GameRounds from './Game/GameRounds'
import Play from './Game/Play'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Leaderboard from './Profiles/Leaderboard'
import Results from './Game/Results';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/round-select'>
              <GameRounds />
            </Route>
            <Route exact path='/play'>
              <Play />
            </Route>
            <Route exact path='/leaderboard'>
              <Leaderboard />
            </Route>
            <Route exact path='/results'>
              <Results />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
