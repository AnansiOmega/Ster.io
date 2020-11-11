import React from 'react'
import SongCard from '../Components/songCard'
import { connect } from 'react-redux'
import axios from 'axios'
import { selectSong } from '../Actions/songs'
import { Button, Form } from 'semantic-ui-react'


class SongCollab extends React.Component {
    state = {
        title: '',
        genre: '',
        instrument: '',
        user_id: this.props.auth.id,
        track: '',
        collabIds: [],
        errors: []
    }

    componentDidMount(){
        this.props.selectSong(this.props.match.params.id)
        setTimeout( () => {
            const collabIds = this.props.song[0].collab_tracks.map(track => track.id)
            this.setState({
                collabIds
            })
        }, 100)
    }

    renderSongs = () => {
        return this.props.song.map(song => {
            let className = 'song-collab-track'
            return <SongCard song={song} className={className}/>
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
                if(data.data.errors){
                    this.setState({
                        errors: data.data.errors
                    })
                return
            }
                formData.append('collab_track_id', data.data.id)
                axios.post("http://localhost:3000/songCollab", formData)
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

    renderErrors = () => {
        if(this.state.errors){
            return this.state.errors.map(error => error.split(' ')[0])
        } else {
            return []
        }
    }



    render(){
        return(
            <div>
            <div>
                {this.renderSongs()}
            </div>
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
                {/* <Form.Field> */}
                    {/* <label>Title</label> */}
                    {/* <input onChange={this.handleChange} type="text" name="title" value={this.state.title}/> */}
                {/* </Form.Field> */}
                {/* <Form.Field> */}
                    {/* <label>Genre</label> */}
                    {/* <input onChange={this.handleChange} type="text" name="genre" value={this.state.genre}/> */}
                    {/* <label>Instrument</label> */}
                    {/* <input onChange={this.handleChange} type="text" name="instrument" value={this.state.instrument}/> */}
                    {this.renderErrors().includes('Track') ? <h4 style={{color: 'red'}}>Track cannot be empty</h4> : null }
                    <input
                        type="file"
                        accept=".mp3,audio/*"
                        onChange={this.handleFileUpload}
                        />
                {/* </Form.Field> */}
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        song: state.songs
    }
}

const mapDispatchToProps = {
    selectSong
}

export default connect(mapStateToProps, mapDispatchToProps)(SongCollab)