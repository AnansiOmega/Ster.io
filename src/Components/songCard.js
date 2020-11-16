import React from 'react'
import { List, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectAudio } from '../Actions/audio'
import { toggleAudio } from '../Actions/audio'
import { skipBackward } from '../Actions/audio'


const songCard = (props) => {
  
 const renderInstruments = () => {
   if(!props.song.collab_tracks){
     return
   }
     return props.song.collab_tracks.map((track, index) => {
      const userInfo = props.song.users[index]
      // const userId = track.user ? track.user.id : userInfo.id
      if(!userInfo.id){
        return
      }
      const userId = userInfo.id
      let userProfileLink = `/users/${userId}`
      const deleteButton = props.auth.id === userId && props.handleDeleteAssociation ?
       <Button size='mini' onClick={() => props.handleDeleteAssociation(track.id, props.song.id)}>Remove</Button>
        : 
        null
      return <div>
                <Link to={userProfileLink}>
                  <p style={{lineHeight: '1.5'}}>{track.instrument}: {track.user ? track.user.username : userInfo.username}</p>
                </Link>
                <div style={{marginRight: '20px'}}>
                {deleteButton}
                </div>
              </div>
    })
  }

  const songCollabLink = `/home/songCollab/${props.song.id}`
  const myStyle = props.song.id === props.selectedTrack ? 'rgba(0,166,124,0.5)' : null
  const className = props.className || null
  return(
  <List.Item className={className} onClick={() => props.selectAudio(props.song)} style={{backgroundColor: myStyle}}>
    <div className="col" style={{display: 'flex', justifyContent: 'flex-start', flexBasis: '100%'}}>
      <List.Header style={{float: 'left'}}>{props.song.title}</List.Header>
    </div>
    <List.Header style={{textAlign: 'center'}}>{props.song.genre}</List.Header>
    <List.Content style={{float: 'right', marginBottom: '5px'}}>{renderInstruments()}</List.Content>
    <List.Header style={{float: 'left'}}>
      <Button onClick={props.skipBackward } circular icon='stop'></Button>
      <Button icon='play' circular onClick={props.toggleAudio}></Button>
    </List.Header>
    <List.Content style={{float: 'middle', marginRight:'85px'}} align='middle'>
      <Link to={songCollabLink}>
        <Button circular >Collaborate</Button>
      </Link>
    </List.Content>
  </List.Item>
  )
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


export default connect(mapStateToProps, mapDispatchToProps)(songCard)