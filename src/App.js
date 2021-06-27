import React from "react";
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Home from './Components/pages/HomePage'
import Perceverance from './Components/pages/Perseverance'
import Curiosity from './Components/pages/Curiosity'

function App() {
  return (
    <div className="App">
      <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/perseverance" exact>
            <Perceverance />
          </Route>
          <Route path="/curiosity" exact>
            <Curiosity />
          </Route>
        </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
