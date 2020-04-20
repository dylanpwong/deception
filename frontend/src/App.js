import React from 'react';
import './reset.css';
import { Route, Switch } from 'react-router-dom';
import SplashContainer from './components/splash/splash_container';
import LoadingContainer from './components/loading/loading_container';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/loading" component={LoadingContainer} />
        <Route exact path="/" component={SplashContainer} />
      </Switch>

    </div>
  );
}

export default App;
