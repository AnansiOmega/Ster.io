import React from 'react'
import './App.css'
import Login from './Pages/login'
import Signup from './Pages/signup'
import Home from './Pages/home'
import NavBar from './Components/navBar'
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route path='/home' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
