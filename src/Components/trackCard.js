import React from 'react'
import { List, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectAudio } from '../Actions/audio'
import { toggleAudio } from '../Actions/audio'
import { skipBackward } from '../Actions/audio'

class TrackCard extends React.Component {

render(){
  const uploadSongLink = `/home/songUpload/${this.props.track.id}`
  const myStyle = this.props.track.id === this.props.selectedTrack ? 'rgba(0,166,124,0.5)' : null
  const userProfileLink = `/users/${this.props.track.user.id}`
  return(
    <List.Item onClick={() => this.props.selectAudio(this.props.track)} style={{ backgroundColor: myStyle }}>
      <div className="col" style={{ display: 'flex', justifyContent: 'flex-start', flexBasis: '100%' }}>
        <List.Content style={{ float: 'left' }} align='left'>{this.props.track.title}</List.Content>
      </div>
      <div className="col" style={{ display: 'flex', justifyContent: 'center', flexBasis: '100%', float: 'middle' }}>
        <div style={{ textAlign: 'center' }}>{this.props.track.genre}</div>
      </div>
      <Link to={userProfileLink}>
      <List.Content style={{ float: 'right' }}>{this.props.track.instrument}: {this.props.track.user.username}</List.Content>
      </Link>
      <List.Content style={{ float: 'left' }} align='left'>
        <Button onClick={this.props.skipBackward} circular icon='stop'></Button>
        <Button style={{ marginRight: '20px' }} circular icon='play' onClick={this.props.toggleAudio}></Button>
      </List.Content>
      <List.Content style={{ float: 'middle', marginRight: '85px' }} align='middle'>
        <Link to={uploadSongLink}>
          <Button circular >Collaborate</Button>
        </Link>
      </List.Content>
    </List.Item>
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      selectedTrack: state.selectAudio
    }
  }

  const mapDispatchToProps = {
    selectAudio,
    toggleAudio,
    skipBackward
  }

export default connect(mapStateToProps, mapDispatchToProps)(TrackCard)