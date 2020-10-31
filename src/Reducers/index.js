import { combineReducers } from 'redux'
import collabTracks from './collabTracks'
import songs from './songs'
import auth from './auth'



export default combineReducers({
    auth,
    collabTracks,
    songs
})