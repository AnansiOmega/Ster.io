const initialState = []

const SongsReducer = (state=initialState, action) => {
    switch(action.type){
        case 'FETCH_SONGS_SUCCESS':
            return [...action.payload]
        case 'SELECT_SONG':
            const selectedSong = state.filter(song => song.id === parseInt(action.payload))
            return selectedSong
        case 'DELETE_COLLAB_SUCCESS':
            const songs = state.map(song => {
               return song.collab_tracks.filter(track => {
                   return track.id !== action.payload.id
                    })
                })
            return songs
        case 'LOGOUT_USER':
            return []
        default:
        return state
    }
}

export default SongsReducer