const initialState = []

const collabTracksReducer = (state=initialState, action) => {
    switch(action.type){
        case 'FETCH_COLLABS_SUCCESS':
            return [...action.payload]
        case 'SELECT_TRACK':
            const selectedTrack = state.filter(track => track.id === parseInt(action.payload))
            return selectedTrack
        case 'LOGOUT_USER':
            return []
        default:
        return state
    }
}

export default collabTracksReducer