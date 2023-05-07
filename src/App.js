import Navbar from './Navbar';
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
            <Route exact path='/add-games'>
              {/* Check current games before adding */}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
