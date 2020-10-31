import React from 'react'
import { fetchUserSuccess } from '../Actions/auth'
import { connect } from 'react-redux'


class Login extends React.Component{
state = {
    username: 'Iggs',
    password: '123',
    error: null
}


handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault()
    const reqObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
    }

    fetch('http://localhost:3000/auth', reqObj)
    .then(resp => resp.json())
    .then(user => {
        if(user.error){
            this.setState({
                error: user.error
            })
        } else {
            localStorage.setItem('myToken', user.token)
            this.props.fetchUserSuccess(user)
            this.props.history.push('/home')
        }
    })
}


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label name='username'>Username:</label>
                <input onChange={this.handleChange} type="text" name="username" value={this.state.username}></input>
                <label>Password:</label>
                <input onChange={this.handleChange} type="text" name="password" value={this.state.password}></input>
                <input type="submit" value="Submit"></input>
            </form>
        )
    }
}

const mapDispatchToProps = {
    fetchUserSuccess
}

export default connect(null, mapDispatchToProps)(Login)