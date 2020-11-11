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
                if(!song || !song.collab_tracks){
                    return
                }
               return song.collab_tracks.filter(track => {
                   return track.id !== action.payload.id
                    })
                })
            return songs
        case 'DELETE_ASSOCIATION_SUCCESS':
            let updatedSongs = state.map(song => {
                if(song.id === action.payload.song.id){
                   return song = action.payload.song
                } else {
                    return song
                }
            })
            return updatedSongs
        case 'SELECT_AUDIO':
            let song = state.length === 0 && !!action.payload.collab_tracks ? [action.payload] : state
            return song
        case 'LOGOUT_USER':
            return []
        default:
        return state
    }
}

export default SongsReducer