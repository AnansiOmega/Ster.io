const initialState = {}

const userReducer = (state=initialState, action) => {
    switch(action.type){
        case 'FETCHED_USER':
            const uniqSongs = [];
            const map = new Map();
            for (const item of action.payload.songs) {
                if(!map.has(item.id)){
                    map.set(item.id, true);
                    uniqSongs.push({
                        id: item.id,
                        title: item.title,
                        collab_tracks: [...item.collab_tracks],
                        genre: item.genre,
                        users: [...item.users]
                    });
                }
            }
            const userInfo = {
                ...action.payload,
                songs: uniqSongs
            }
            return userInfo
        case 'LOGOUT_USER':
            return {}
        default:
        return state
    }
}

export default userReducer