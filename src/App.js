import React from 'react'
import './App.css'
import Login from './Pages/login'
import Signup from './Pages/signup'
import Home from './Pages/home'
import UserHomePage from './Pages/userPage'
import NavBar from './Components/navBar'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import AudioPlayer from './Components/AudioPlayer'


function App(props) {

 const renderAudioPlayers = () => {
    return props.audio.map(link => {
        let audioLink = `http://localhost:3000${link}`
        let options = { waveColor: 'rgba(0,166,124,0.5)'}
        return <AudioPlayer audioFile={audioLink} playing={props.toggle} reset={props.controls} options={options}/>
    })
}

  return (
    <div className="App">
      <NavBar/>
      {renderAudioPlayers()}
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route path='/home' component={Home} />
        <Route path='/users/:id' component={UserHomePage} />
      </Switch>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
      audio: state.audio,
      toggle: state.audioToggle,
      controls: state.audioControls
  }
}


export default connect(mapStateToProps)(App)
