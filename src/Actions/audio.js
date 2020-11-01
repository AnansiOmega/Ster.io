export const selectAudio = (payload) => {
    return {
        type: 'SELECT_AUDIO',
        payload
    }
}

export const toggleAudio = (payload) => {
    return {
        type: 'TOGGLE_AUDIO',
        payload
    }
}
