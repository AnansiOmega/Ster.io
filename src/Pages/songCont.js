import React from 'react'
import { connect } from 'react-redux'
import { fetchCollabsSuccess } from '../Actions/collabTracks'
import { fetchSongsSuccess } from '../Actions/songs'
import TrackCard from '../Components/trackCard'
import { Tab } from 'semantic-ui-react'
import SongCard from '../Components/songCard'

class SongCont extends React.Component {

    componentDidMount(){
        fetch('http://localhost:3000/collab_tracks')
        .then(resp => resp.json())
        .then(tracks => {
            this.props.fetchCollabsSuccess(tracks)
        })
        fetch('http://localhost:3000/songs')
        .then(resp => resp.json())
        .then(songs => {
            this.props.fetchSongsSuccess(songs)
        })
    }

    renderTracks = () => {
        return this.props.tracks.map(track => {
            return <TrackCard track={track} />
        })
    }

    renderSongs = () => {
        return this.props.songs.map(song => {
            return <SongCard song={song}/>
        })
    }

    render(){
        
const panes = [
    { menuItem: 'Tab 1', render: () => <Tab.Pane>{this.renderTracks()}</Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane>{this.renderSongs()}</Tab.Pane> }
  ]
  
  const tabs = () => <Tab panes={panes} />
        return(
           <div>{tabs()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tracks: state.collabTracks,
        songs: state.songs
    }
}

const mapDispatchToProps = {
    fetchCollabsSuccess,
    fetchSongsSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(SongCont)