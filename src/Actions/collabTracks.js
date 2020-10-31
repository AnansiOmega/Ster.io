
export const fetchCollabsSuccess = (payload) => {
    return {
        type: 'FETCH_COLLABS_SUCCESS',
        payload
    }
}

export const selectTrack = (payload) => {
    return {
        type: 'SELECT_TRACK',
        payload
    }
}