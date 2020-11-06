const initialState = {}

const userReducer = (state=initialState, action) => {
    switch(action.type){
        case 'FETCHED_USER':
            const uniqSongs = [];
            const songMap = new Map();
            for (const item of action.payload.songs) {
                if(!songMap.has(item.id)){
                    songMap.set(item.id, true);
                    uniqSongs.push({
                        id: item.id,
                        title: item.title,
                        collab_tracks: [...item.collab_tracks],
                        genre: item.genre,
                        users: [...item.users],
                    });
                }
            }
            const uniqTracks = [];
            const trackMap = new Map();
            for (const item of action.payload.collab_tracks) {
                if(!trackMap.has(item.id)){
                    trackMap.set(item.id, true);
                    uniqTracks.push({
                        id: item.id,
                        title: item.title,
                        genre: item.genre,
                        track: item.track,
                        instrument: item.instrument
                    });
                }
            }
            const userInfo = {
                ...action.payload,
                songs: uniqSongs
            }
            return userInfo
        case 'DELETE_COLLAB_SUCCESS':
            const collab_tracks = state.collab_tracks.filter(track => track.id !== action.payload.id)
            const songCollabTracks = state.songs.map(song => {
                return song.collab_tracks.filter(track => {
                    return track.id !== action.payload.id
                })
            })

            let songUsers = state.songs.map(song => {
                const index = song.users.findIndex(user => user.id === state.id )
                song.users.splice(index, 1)  
                return song.users
            })

            const songs = state.songs.map((song, index) => {
                const tracks = songCollabTracks[index]
                const users = songUsers[index]
                if(users.some( user => user.id === state.id)){
                    return {
                        ...song,
                        collab_tracks: [...tracks],
                        users
                    }
                }
            })

        let newUserInfo =  {...state, collab_tracks, songs: songs.filter(song => song) }
        
        return newUserInfo
        case 'LOGOUT_USER':
            return {}
        default:
        return state
    }
}

export default userReducer