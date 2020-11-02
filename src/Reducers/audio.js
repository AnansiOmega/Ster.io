const initialState = []

const audioReducer = (state=initialState, action) => {
    switch(action.type){
        case 'SELECT_AUDIO':
            let payload = ''
            action.payload.collab_tracks ? payload = action.payload.collab_tracks.map(track => track.track) : payload = action.payload.track
            let tracks = ''
            payload instanceof Array ? tracks = payload : tracks = [payload]
            return tracks
        case 'LOGOUT_USER':
            return []
        default:
            return state
    }
}

export default audioReducer