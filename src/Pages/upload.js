import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Button, Form } from 'semantic-ui-react'


class Upload extends React.Component {
    state = {
        instrument: '',
        title: '',
        genre: '',
        user_id: this.props.auth.id,
        track: '',
        errors: []
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(!this.state.user_id){
            this.setState({ user_id: this.props.auth.id})
        }

        const formData = new FormData()

        for (const property in this.state) {
            formData.append(
                property, this.state[property]
            )
        }
        
        axios.post("https://serene-garden-00541.herokuapp.com/collab_tracks", formData)
        .then(data => {
            if(data.data.errors){
                this.setState({
                    errors: data.data.errors
                })
            return
        }
            this.props.history.push('/home')
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFileUpload = (e) => {
        this.setState({
            track: e.target.files[0]
        })
    }


    renderErrors = () => {
        if(this.state.errors){
            return this.state.errors.map(error => error.split(' ')[0])
        } else {
            return []
        }
    }

   
    render(){
        return(
            <Form className='form' onSubmit={this.handleSubmit}>
            <Form.Input
                error={this.renderErrors().includes('Title') ? "Title can't be blank" : false }
                fluid
                label='Title'
                type='text'
                name='title'
                value={this.state.title}
                onChange={this.handleChange}
            />
            <Form.Input
                error={this.renderErrors().includes('Genre') ? "Genre can't be blank" : false }
                fluid
                label='Genre'
                type='text'
                name='genre'
                value={this.state.genre}
                onChange={this.handleChange}
            />
            <Form.Input
                error={this.renderErrors().includes('Instrument') ? "Instrument can't be blank" : false }
                fluid
                label='Instrument'
                type='text'
                name='instrument'
                value={this.state.instrument}
                onChange={this.handleChange}
            />
            {this.renderErrors().includes('Track') ? <h4 style={{color: 'red'}}>Track cannot be empty</h4> : null }
            <input
                type="file"
                accept=".mp3,audio/*"
                onChange={this.handleFileUpload}
            />
            <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Upload)