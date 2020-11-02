
const audioControlsReducer = (state=false, action) => {
    switch(action.type){
        case 'SKIP_BACKWARD':
            return true
        case 'TOGGLE_AUDIO':
            return false
        case 'LOGOUT_USER':
            return false
        default:
            return state
    }
}

export default audioControlsReducer