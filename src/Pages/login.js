import React from 'react'
import { fetchUserSuccess } from '../Actions/auth'
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


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
            <div>
            <h4 style={{color: 'red'}}>{this.state.error}</h4>
            <Form onSubmit={this.handleSubmit}>
                <label name='username'>Username:</label>
                <input onChange={this.handleChange} type="text" name="username" value={this.state.username}></input>
                <label>Password:</label>
                <input onChange={this.handleChange} type="text" name="password" value={this.state.password}></input>
                <Button type='submit'>Login</Button>
                <Link to='/signup'>
                <Button>Sign up</Button>
                </Link>
            </Form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchUserSuccess
}

export default connect(null, mapDispatchToProps)(Login)