import React from 'react'
import { List, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectAudio } from '../Actions/audio'
import { toggleAudio } from '../Actions/audio'
import { skipBackward } from '../Actions/audio'


class songCard extends React.Component {

    handleAudio = () => {
        this.setState({
            audioPlay: !this.state.audioPlay
        })
    }

    renderInstruments = () => {
        return this.props.song.collab_tracks.map(track => {
        return <p>{track.instrument}</p>

        })
    }

    render(){
        const songCollabLink = `/home/songCollab/${this.props.song.id}`
        const myStyle = this.props.song.id === this.props.selectedTrack ? 'rgba(0,166,124,0.5)' : null
      return(
        <List.Item onClick={() => this.props.selectAudio(this.props.song)} style={{backgroundColor: myStyle}}>
        <List.Content>
          <List.Header style={{float: 'left'}} align='left'>{this.props.song.title}</List.Header>
          <List.Header style={{float: 'left'}} align='left'><Button onClick={this.props.skipBackward } circular icon='stop'></Button><Button icon='play' circular onClick={() => this.props.toggleAudio()}></Button></List.Header>
          <List.Header style={{float: 'middle', marginRight:'90px'}} align='middle'>{this.props.song.genre}</List.Header>
          <List.Content style={{float: 'middle', marginRight:'85px'}} align='middle'>
            <Link to={songCollabLink}>
              <Button circular >Collaborate</Button>
            </Link>
          </List.Content>
          <List.Content style={{float: 'right'}} align='right'>{this.renderInstruments()}</List.Content>
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


export default connect(mapStateToProps, mapDispatchToProps)(songCard)