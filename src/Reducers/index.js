import { combineReducers } from 'redux'
import collabTracks from './collabTracks'
import songs from './songs'
import auth from './auth'
import audio from './audio'
import audioControls from './audioControls'
import audioToggle from './audioToggle'
import selectAudio from './selectAudio'



export default combineReducers({
    auth,
    collabTracks,
    songs,
    audio,
    audioToggle,
    audioControls,
    selectAudio
})