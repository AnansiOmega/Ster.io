const initialState = []

const SongsReducer = (state=initialState, action) => {
    switch(action.type){
        case 'FETCH_SONGS_SUCCESS':
            return [...action.payload]
        case 'SELECT_SONG':
            const selectedSong = state.filter(song => song.id === parseInt(action.payload))
            return selectedSong
        default:
        return state
    }
}

export default SongsReducer