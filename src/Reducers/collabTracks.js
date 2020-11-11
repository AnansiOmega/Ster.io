const initialState = []

const collabTracksReducer = (state=initialState, action) => {
    switch(action.type){
        case 'FETCH_COLLABS_SUCCESS':
            return [...action.payload]
        case 'SELECT_TRACK':
            const selectedTrack = state.filter(track => track.id === parseInt(action.payload))
            return selectedTrack
        case 'DELETE_COLLAB_SUCCESS':
            const collabTracks = state.filter(track => track.id !== parseInt(action.payload.id))
            return collabTracks
        case 'SELECT_AUDIO':
            // debugger
            if(action.payload.collab_tracks){
                return state
            }
            let track = state.length === 0 ? [action.payload] : state
            return track
        case 'LOGOUT_USER':
            return []
        default:
        return state
    }
}

export default collabTracksReducer