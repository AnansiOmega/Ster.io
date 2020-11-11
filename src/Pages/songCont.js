import React from 'react'
import { connect } from 'react-redux'
import { fetchCollabsSuccess } from '../Actions/collabTracks'
import { fetchSongsSuccess } from '../Actions/songs'

import TrackCard from '../Components/trackCard'
import { Tab } from 'semantic-ui-react'
import SongCard from '../Components/songCard'
import { List } from 'semantic-ui-react'

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
            return <List animated celled size='tiny'>
                <TrackCard track={track} key={track.id} /></List>
        })
    }

    renderSongs = () => {
        return this.props.songs.map(song => {
            return <List animated celled size='tiny'>
                <SongCard song={song} key={song.id}/></List>
        })
    }

    render(){
const panes = [
    { menuItem: 'Tracks', render: () => <Tab.Pane>
        <div>
            <div className='list-header' align='left'>Title</div>
            <div className='list-header' align='middle'>Genre</div>
            <div className='list-header' align='right'>Instrument</div>
            {this.renderTracks()}
        </div>
        </Tab.Pane> },
    { menuItem: 'Songs', render: () => <Tab.Pane>
        <div>
            <div className='list-header' align='left'>Title</div>
            <div className='list-header' align='middle'>Genre</div>
            <div className='list-header' align='right'>Instrument</div>
            {this.renderSongs()}
        </div>
        </Tab.Pane> }
  ]
  const tabs = () => <Tab panes={panes} />
        return(
            <div>
                {tabs()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tracks: state.collabTracks,
        songs: state.songs,
        audio: state.audio,
        toggle: state.audioToggle
    }
}

const mapDispatchToProps = {
    fetchCollabsSuccess,
    fetchSongsSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(SongCont)