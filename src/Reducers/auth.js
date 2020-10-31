const initialState = {}

const authReducer = (state=initialState, action) => {
    switch(action.type){
        case 'FETCH_USER_SUCCESS':
        case 'CURRENT_USER':
            return action.payload
        case 'LOGOUT_USER':
            return {}
        default:
        return state
    }
}

export default authReducer