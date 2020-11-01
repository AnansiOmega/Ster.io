import React from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectAudio } from '../Actions/audio'
import { toggleAudio } from '../Actions/audio'

class TrackCard extends React.Component {

      


    render(){
      const uploadSongLink = `/home/songUpload/${this.props.track.id}`
      return(
          <Card onClick={() => this.props.selectAudio(this.props.track.track)}>
            <Card.Content
              header={this.props.track.title}
              meta={this.props.track.genre}
              description={this.props.track.instrument}
            />
        <Link to={uploadSongLink}>
        <button>
          <span>Collaborate</span>
        </button>
        </Link>
        <button onClick={() => this.props.toggleAudio()}>play</button>
          </Card>
      )
    }
  }

  const mapDispatchToProps = {
    selectAudio,
    toggleAudio
  }

export default connect(null, mapDispatchToProps)(TrackCard)