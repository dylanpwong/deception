import React from 'react';
import './reset.css';
import { Route, Switch } from 'react-router-dom';
import SplashContainer from './components/splash/splash_container';
import LoadingContainer from './components/loading/loading_container';
import GameContainer from './components/game/game_container';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/game" component={GameContainer} />
        <Route exact path="/loading" component={LoadingContainer} />
        <Route exact path="/" component={SplashContainer} />
      </Switch>

    </div>
  );
}

export default App;
