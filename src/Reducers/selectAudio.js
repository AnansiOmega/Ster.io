const initialState = ''

const audioSelectReducer = (state=initialState, action) => {
    switch(action.type){
        case 'SELECT_AUDIO':
            return action.payload.id
        case 'LOGOUT_USER':
            return ''
        default:
            return state
    }
}

export default audioSelectReducer