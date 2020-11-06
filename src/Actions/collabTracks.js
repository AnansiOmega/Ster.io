
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

export const deleteCollabSuccess = (payload) => {
    return {
        type: 'DELETE_COLLAB_SUCCESS',
        payload
    }
}