import React from 'react'
import SongCard from '../Components/songCard'
import { connect } from 'react-redux'
import axios from 'axios'
import { selectSong } from '../Actions/songs'


class SongCollab extends React.Component {
    state = {
        title: '',
        genre: '',
        instrument: '',
        user_id: parseInt(this.props.auth.id),
        track: '',
        collabIds: []
    }

    componentDidMount(){
        this.props.selectSong(this.props.match.params.id)
        const collabIds = this.props.song[0].collab_tracks.map(track => track.id)
        this.setState({
            collabIds
        })
    }

    // componentDidUpdate(prevProps) {
    //     debugger
    //     // if (this.props.userID !== prevProps.userID) {
    //     //   this.fetchData(this.props.userID);
    //     // }
    //   }

    renderSongs = () => {
        return this.props.song.map(song => {
            return <SongCard song={song}/>
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


    render(){
        return(
            <div>
            <div>
                {this.renderSongs()}
            </div>
            <form onSubmit={this.handleSubmit}>
            <label>Title:</label>
            <input onChange={this.handleChange} type="text" name="title" value={this.state.title}></input>
            <label>Genre:</label>
            <input onChange={this.handleChange} type="text" name="genre" value={this.state.genre}></input>
            <label>Instrument:</label>
            <input onChange={this.handleChange} type="text" name="instrument" value={this.state.instrument}></input>
            <label>File:</label>
            <input
                    type="file"
                    accept=".mp3,audio/*"
                    onChange={this.handleFileUpload}
                />
            <input type="submit" value="Submit"></input>
        </form>
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