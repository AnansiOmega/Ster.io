import React from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class songCard extends React.Component {
  state = {
      audioPlay: false
  }
      
    renderAudio = () => {
        return this.props.song.collab_tracks.map(track => {
              const audioLink = `http://localhost:3000/${track.track}`
              const audio = new Audio(audioLink)
              audio.play()
        })
    }

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
        const songCollab = `/home/songCollab/${this.props.song.id}`
      return(
        <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header>{this.props.song.title}</Card.Header>
            <Card.Meta>{this.props.song.genre}</Card.Meta>
            <Card.Description>
              {this.renderInstruments()}
            </Card.Description>
          </Card.Content>
          <div>
          <button onClick={this.handleAudio}>
            <span>Play Audio</span>
          </button>
          {this.state.audioPlay ? this.renderAudio() : null}
          </div>
          <Link to={songCollab} >
        <button>
          <span>Collaborate</span>
        </button>
        </Link>
          </Card>
        </Card.Group>
      )
    }
  }


export default songCard