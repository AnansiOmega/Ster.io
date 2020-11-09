import React from 'react'
import { List, Button, Icon } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectAudio } from '../Actions/audio'
import { toggleAudio } from '../Actions/audio'
import { skipBackward } from '../Actions/audio'


class songCard extends React.Component {
    
    renderInstruments = () => {
       return this.props.song.collab_tracks.map((track, index) => {
        const userInfo = this.props.song.users[index]
        const userId = track.user ? track.user.id : userInfo.id
        let userProfileLink = `/users/${userId}`
        const deleteButton = this.props.handleDeleteAssociation ?
         <Button onClick={() => this.props.handleDeleteAssociation(this.props.track.id)} circular icon='delete' style={{float: 'right'}}></Button>
          : 
          null
          // debugger
        return <div>
                  <Link to={userProfileLink}>
                    <p style={{lineHeight: '1.5'}}>{track.instrument}: {track.user ? track.user.username : userInfo.username}</p>
                  </Link>
                </div>
      })
    }


    render(){
        const songCollabLink = `/home/songCollab/${this.props.song.id}`
        const myStyle = this.props.song.id === this.props.selectedTrack ? 'rgba(0,166,124,0.5)' : null
      return(
        <List.Item onClick={() => this.props.selectAudio(this.props.song)} style={{backgroundColor: myStyle}}>
          <div className="col" style={{display: 'flex', justifyContent: 'flex-start', flexBasis: '100%'}}>
            <List.Header style={{float: 'left'}}>{this.props.song.title}</List.Header>
          </div>
          <List.Header style={{textAlign: 'center'}}>{this.props.song.genre}</List.Header>
          <List.Content style={{float: 'right', marginBottom: '5px'}}>{this.renderInstruments()}</List.Content>
          <List.Header style={{float: 'left'}}>
            <Button onClick={this.props.skipBackward } circular icon='stop'></Button>
            <Button icon='play' circular onClick={this.props.toggleAudio}></Button>
          </List.Header>
          <List.Content style={{float: 'middle', marginRight:'85px'}} align='middle'>
            <Link to={songCollabLink}>
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


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(songCard))