import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

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
            <form onSubmit={this.handleSubmit}>
            <label>Title:</label>
            <input onChange={this.handleChange} type="text" name="title" value={this.state.title}></input>
            <label>Genre:</label>
            <input onChange={this.handleChange} type="text" name="genre" value={this.state.genre}></input>
            <label>Instrument:</label>
            <input onChange={this.handleChange} type="text" name="instrument" value={this.state.instrument}></input>
            <label>Instrument:</label>
            <input
                    type="file"
                    accept=".mp3,audio/*"
                    onChange={this.handleFileUpload}
                />
            <input type="submit" value="Submit"></input>
        </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Upload)