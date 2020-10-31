export const fetchSongsSuccess = (payload) => {
    return {
        type: 'FETCH_SONGS_SUCCESS',
        payload
    }
}

export const selectSong = (payload) => {
    return {
        type: 'SELECT_SONG',
        payload
    }
}
