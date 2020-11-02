import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Button, Form } from 'semantic-ui-react'


class Upload extends React.Component {
    state = {
        instrument: '',
        title: '',
        genre: '',
        user_id: parseInt(this.props.auth.id),
        track: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()

        for (const property in this.state) {
            formData.append(
                property, this.state[property]
            )
        }
        console.log(formData)
        
        axios.post("http://localhost:3000/collab_tracks", formData)
        .then(data => {
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
   
    render(){
        return(
            <Form className='form' onSubmit={this.handleSubmit}>
                <Form.Field>
                    <label>Title</label>
                    <input onChange={this.handleChange} type="text" name="title" value={this.state.title}/>
                </Form.Field>
                <Form.Field>
                    <label>Genre</label>
                    <input onChange={this.handleChange} type="text" name="genre" value={this.state.genre}/>
                    <label>Instrument</label>
                    <input onChange={this.handleChange} type="text" name="instrument" value={this.state.instrument}/>
                    <input
                        type="file"
                        accept=".mp3,audio/*"
                        onChange={this.handleFileUpload}
                        />
                </Form.Field>
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