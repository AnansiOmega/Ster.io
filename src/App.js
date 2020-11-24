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
import {  Button } from 'semantic-ui-react'


class App extends React.Component {

  state = {
    squash: false
  }

  renderAudioPlayers = () => {
    return this.props.audio.map(link => {
      let audioLink = `https://serene-garden-00541.herokuapp.com${link}`
      let options = { waveColor: 'rgba(0,166,124,0.5)' }
      return <AudioPlayer audioFile={audioLink} playing={this.props.toggle} reset={this.props.controls} options={options} squash={this.state.squash}/>
      })
  }

  squashToggle = () => {
    this.setState({
      squash: !this.state.squash
    })
  }

  render(){
    const myStyle = this.state.squash ? { position: 'relative', height: '100px'} : null
    const icon = this.state.squash ? 'angle down' : 'angle up'
    return (
      <div className="App">
        <NavBar/>
        <div style={myStyle}>
        {this.renderAudioPlayers()}
        </div>
        <Button style={{float: 'right', top: '100px'}} icon={icon} circular onClick={this.squashToggle}></Button>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route path='/home' component={Home} />
          <Route path='/users/:id' component={UserHomePage} />
        </Switch>
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
      audio: state.audio,
      toggle: state.audioToggle,
      controls: state.audioControls
  }
}


export default connect(mapStateToProps)(App)
