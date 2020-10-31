
export const fetchUserSuccess = (payload) => {
    return {
        type: 'FETCH_USER_SUCCESS',
        payload
    }
}

export const currentUser = (payload) => {
    return {
        type: 'CURRENT_USER',
        payload
    }
}

export const logoutUser = () => {
    return {
        type: 'LOGOUT_USER'
    }
}