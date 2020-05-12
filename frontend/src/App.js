import React from 'react';
import './reset.css';
import { Route, Switch } from 'react-router-dom';
import SplashContainer from './components/splash/splash_container';
import LoadingContainer from './components/loading/loading_container';
import GameContainer from './components/game/game_container';
import DemoGameContainer from './components/demo_game/demo_game_container';
import Modal from './components/modal/modal.jsx';
import openSocket from 'socket.io-client';
// const socket = openSocket("http://localhost:3000/#/");
const socket = openSocket("https://deception.herokuapp.com/");
// function transferToGamePage() {/
//   socket.on("playGame2", () => {

//   })
// }
function App() {
  return (
    <div className="App">
      <Modal />
      <Switch>
        {/* <Route exact path="/game" component={GameContainer} /> */}
        {/* <Route exact path="/loading" component={LoadingContainer} /> */}
        {/* <Route exact path="/" component={SplashContainer} /> */}
        <Route exact path='/demo' component={DemoGameContainer}/>
        <Route exact path='/game' render={(props)=><GameContainer {...props} socket={socket}/>}/>
        <Route path="/loading"render ={(props)=> <LoadingContainer {...props} socket={socket}/>}/>
        <Route path="/"render={(props)=> <SplashContainer {...props} socket={socket}/>}/>
      </Switch>

    </div>
  );
}

export default App;
