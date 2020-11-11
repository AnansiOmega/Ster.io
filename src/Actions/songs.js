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

export const deleteAssociationSuccess = (payload) => {
    return {
        type: 'DELETE_ASSOCIATION_SUCCESS',
        payload
    }
}
