import React from 'react'
import AudioPlayer from './AudioPlayer'
import { connect } from 'react-redux'

const showAudio = (props) => {
    let audioLink = `http://localhost:3000${props.audio}`
    return (
        <AudioPlayer audioFile={audioLink} playing={props.toggle} />
    )
}

const mapStateToProps = (state) => {
    return {
        audio: state.audio,
        toggle: state.audioToggle
    }
}

export default connect(mapStateToProps)(showAudio)