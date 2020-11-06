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
        case 'LOGOUT_USER':
            return []
        default:
        return state
    }
}

export default collabTracksReducer