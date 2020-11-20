import React from 'react'
import { connect } from 'react-redux'
import { currentUser } from '../Actions/auth'
import { Switch, Route } from 'react-router-dom'
import SongCont from './songCont'
import Upload from './upload'
import SongUpload from './songUpload'
import SongCollab from './songCollab'


class Explore extends React.Component {

    componentDidMount() {
        const token = localStorage.getItem('myToken')
        if (!token) {
            this.props.history.push('/login')
        } else {
            const reqObj = {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
            fetch('https://serene-garden-00541.herokuapp.com/current_user', reqObj)
                .then(resp => resp.json())
                .then(user => {
                    if (user.error) {
                        this.props.history.push('/login')
                    } else {
                        this.props.currentUser(user)
                    }
                })
        }
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/home' component={SongCont}></Route>
                    <Route path='/home/upload' component={Upload} />
                    <Route path='/home/songUpload/:id' component={SongUpload} />
                    <Route path='/home/songCollab/:id' component={SongCollab} />
                </Switch>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         // audio: state.audio,
//         // toggle: state.audioToggle,
//         // controls: state.audioControls
//     }
// }
const mapDispatchToProps = {
    currentUser
}

export default connect(null, mapDispatchToProps)(Explore)