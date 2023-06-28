import Navbar from './Navbar';
import Home from './Game/Home'
import GameRounds from './Game/GameRounds'
import Play from './Game/Play'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddGame from './AddGames/AddGame';
import Leaderboard from './Profiles/Leaderboard'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/home/round-select'>
              <GameRounds />
            </Route>
            <Route exact path='/home/play'>
              <Play />
            </Route>
            <Route exact path='/add-games'>
              {/* Check current games before adding */}
              <AddGame />
              </Route>
            <Route exact path='/leaderboard'>
              <Leaderboard />
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
