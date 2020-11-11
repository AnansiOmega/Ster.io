import React from 'react'
import { List, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectAudio, toggleAudio, skipBackward } from '../Actions/audio'


class TrackCard extends React.Component {

render(){
  const deleteButton = this.props.handleDelete && this.props.track.user.id === this.props.auth.id ? <Button onClick={() => this.props.handleDelete(this.props.track)} circular icon='delete' style={{float: 'right'}}></Button> : null
  const uploadSongLink = `/home/songUpload/${this.props.track.id}`
  const myStyle = this.props.track.id === this.props.selectedTrack ? 'rgba(0,166,124,0.5)' : null
  const userProfileLink = `/users/${this.props.track.user.id}`
  let className = this.props.className || null
  return(
    <List.Item className={className} onClick={() => this.props.selectAudio(this.props.track)} style={{ backgroundColor: myStyle }}>
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
        {deleteButton}
      </List.Content>
    </List.Item>
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      selectedTrack: state.selectAudio,
      auth: state.auth
    }
  }

  const mapDispatchToProps = {
    selectAudio,
    toggleAudio,
    skipBackward
  }

export default connect(mapStateToProps, mapDispatchToProps)(TrackCard)