import React from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Wavesurfer from 'react-wavesurfer';
require('wavesurfer.js');


// In my bundle config this is setup to export to window.WaveSurfer
class TrackCard extends React.Component {
  state = {
      playing: false,
      pos: 0
  }

  handleTogglePlay() {
    this.setState({
      playing: !this.state.playing
    });
  }

  handlePosChange(e) {
    this.setState({
      pos: e.originalArgs[0]
    });
  }

  render() {
    const audioLink = `http://localhost:3000/${this.props.track.track}`
    return (
      <div>
        <Wavesurfer
          audioFile={audioLink}
          pos={this.state.pos}
          onPosChange={this.handlePosChange}
          playing={this.state.playing}
        />
      </div>
      );
  }
}
    // playAudio = () => {
    //   const audioEl = document.getElementsByClassName("audio-element")[0]
    //   audioEl.play()
    // }
  

    // render(){
    //   const audioLink = `http://localhost:3000/${this.props.track.track}`
    //   const uploadSongLink = `/home/songUpload/${this.props.track.id}`
    //   return(
    //       <Card.Group>
    //       <Card>
    //         <Card.Content
    //           header={this.props.track.title}
    //           meta={this.props.track.genre}
    //           description={this.props.track.instrument}
    //         />
    //       <div>
    //       <button onClick={this.playAudio}>
    //         <span>Play Audio</span>
    //       </button>
    //       <audio className="audio-element">
    //         <source src={audioLink}></source>
    //       </audio>
    //       </div>
    //     <Link to={uploadSongLink}>
    //     <button>
    //       <span>Collaborate</span>
    //     </button>
    //     </Link>
    //       </Card>
    //     </Card.Group>
  //     )
  //   }
  // }

export default TrackCard