import { combineReducers } from 'redux'
import collabTracks from './collabTracks'
import songs from './songs'
import auth from './auth'
import audio from './audio'
import audioToggle from './audioToggle'



export default combineReducers({
    auth,
    collabTracks,
    songs,
    audio,
    audioToggle
})