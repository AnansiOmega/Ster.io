import React from 'react'
import { connect } from 'react-redux'
import { fetchUserSuccess } from '../Actions/auth'
import { Button, Form, TextArea } from 'semantic-ui-react'
import axios from 'axios'


class Signup extends React.Component{
state = {
    username: '',
    password: '',
    fname: '',
    lname: '',
    age: '',
    email: '',
    bio: '',
    image: '',
    errors: ''
}


handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleFileUpload = (e) => {
    this.setState({
        image: e.target.files[0]
    })
}

handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()

    for (const property in this.state) {
        formData.append(
            property, this.state[property]
        )
    }

    axios.post("https://serene-garden-00541.herokuapp.com/users", formData)
    .then(data => {
        if(data.data.errors){
            this.setState({
                errors: data.data.errors
            })
        return
        }
         axios.post('https://serene-garden-00541.herokuapp.com/auth', formData)
            .then(data => {
                if(data.data.error){
                    this.setState({
                        error: data.data.error
                    })
                } else {
                    localStorage.setItem('myToken', data.data.token)
                    this.props.fetchUserSuccess(data.data)
                    this.props.history.push('/home')
                }
            })
    })
}


    renderErrors = () => {
        if(this.state.errors){
            return this.state.errors.map(error => error.split(' ')[0])
        } else {
            return []
        }
    }

    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
            <Form.Input
                error={this.renderErrors().includes('Username') ? "Username must be valid" : false }
                fluid
                label='Username'
                type='text'
                name='username'
                value={this.state.username}
                onChange={this.handleChange}
            />
            <Form.Input
                error={this.renderErrors().includes('Password') ? "Password can't be blank" : false }
                fluid
                label='Password'
                type='password'
                name='password'
                value={this.state.password}
                onChange={this.handleChange}
            />
            <Form.Input
                error={this.renderErrors().includes('Fname') ? "First name can't be blank" : false  }
                fluid
                label='First Name'
                type='text'
                name='fname'
                value={this.state.fname}
                onChange={this.handleChange}
            />
            <Form.Input
                error={this.renderErrors().includes('Lname') ? "Last name can't be blank" : false  }
                fluid
                label='Last Name'
                type='text'
                name='lname'
                value={this.state.lname}
                onChange={this.handleChange}
            />
            <Form.Input
                fluid
                label='Age'
                type='number'
                name='age'
                value={this.state.age}
                onChange={this.handleChange}
            />
            <Form.Input
                error={this.renderErrors().includes('Email') ? "Email must be valid" : false  }
                fluid
                label='Email'
                type='text'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
            />
            <Form.TextArea
                fluid
                label='Bio'
                name='bio'
                value={this.state.bio}
                onChange={this.handleChange}
            />
                <label>Profile Image</label>
                <input
                        type="file"
                        accept="image/jpeg"
                        onChange={this.handleFileUpload}
                        />
                <Button type='submit'>Signup</Button>
            </Form>
        )
    }
}

const mapDispatchToProps = {
    fetchUserSuccess
}

export default connect(null, mapDispatchToProps)(Signup)