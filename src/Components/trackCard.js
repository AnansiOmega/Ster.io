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
  return(
    <List.Item onClick={() => this.props.selectAudio(this.props.track)} style={{backgroundColor: myStyle}}>
      <List.Content>
        <List.Header style={{float: 'left'}} align='left'>{this.props.track.title}</List.Header>
        <List.Header style={{float: 'left'}} align='left'><Button onClick={this.props.skipBackward } circular icon='stop'></Button><Button circular icon='play' onClick={this.props.toggleAudio}></Button></List.Header>
        <List.Header style={{float: 'middle', marginRight:'90px'}} align='middle'>{this.props.track.genre}</List.Header>
        <List.Content style={{float: 'middle', marginRight:'85px'}} align='middle'>
          <Link to={uploadSongLink}>
            <Button circular >Collaborate</Button>
          </Link>
          </List.Content>
        <List.Content style={{float: 'right'}} Align='right'>{this.props.track.instrument}</List.Content>
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