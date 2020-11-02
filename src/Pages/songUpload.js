import React from 'react'
import TrackCard from '../Components/trackCard'
import { connect } from 'react-redux'
import axios from 'axios'
import { selectTrack } from '../Actions/collabTracks'
import { Button, Form } from 'semantic-ui-react'


class SongUpload extends React.Component {
    state = {
        title: '',
        genre: '',
        instrument: '',
        user_id: parseInt(this.props.auth.id),
        original_collab_track_id: this.props.match.params.id,
        track: ''
    }

    componentDidMount(){
        this.props.selectTrack(this.props.match.params.id)
    }

    renderTrack = () => {
        return this.props.track.map(track => {
            return <TrackCard track={track} />
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
        
        axios.post("http://localhost:3000/collab_tracks", formData)
        .then(data => {

            formData.append('collab_track_id', data.data.id)

            axios.post("http://localhost:3000/songs", formData)
            .then(data => {
                this.props.history.push('/home')
            })
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

        //     <form onSubmit={this.handleSubmit}>
        //     <label>Title:</label>
        //     <input onChange={this.handleChange} type="text" name="title" value={this.state.title}></input>
        //     <label>Genre:</label>
        //     <input onChange={this.handleChange} type="text" name="genre" value={this.state.genre}></input>
        //     <label>Instrument:</label>
        //     <input onChange={this.handleChange} type="text" name="instrument" value={this.state.instrument}></input>
        //     <label>File:</label>
        //     <input
        //             type="file"
        //             accept=".mp3,audio/*"
        //             onChange={this.handleFileUpload}
        //         />
        //     <input type="submit" value="Submit"></input>
        // </form>
    render(){
        return(
            <div>
            <div>
                {this.renderTrack()}
            </div>
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
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        track: state.collabTracks,
        audio: state.audio
    }
}

const mapDispatchToProps = {
    selectTrack
}

export default connect(mapStateToProps, mapDispatchToProps)(SongUpload)