const initialState = ''

const audioReducer = (state=initialState, action) => {
    switch(action.type){
        case 'SELECT_AUDIO':
            state = ''
            return action.payload
        case 'LOGOUT_USER':
            return ''
        default:
            return state
    }
}

export default audioReducer