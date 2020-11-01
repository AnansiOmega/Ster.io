
const audioToggleReducer = (state=false, action) => {
    switch(action.type){
        case 'TOGGLE_AUDIO':
            return !state
        case 'LOGOUT_USER':
            return false
        default:
            return state
    }
}

export default audioToggleReducer