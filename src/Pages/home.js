import React from 'react'
import { connect } from 'react-redux'
import { currentUser } from '../Actions/auth'
import { Switch, Route } from 'react-router-dom'
import SongCont from './songCont'
import Upload from './upload'
import SongUpload from './songUpload'
import SongCollab from './songCollab'
import AudioPlayer from '../Components/AudioPlayer'


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
            fetch('http://localhost:3000/current_user', reqObj)
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

    renderAudioPlayers = () => {
        return this.props.audio.map(link => {
            let audioLink = `http://localhost:3000${link}`
            let options = { waveColor: 'rgba(0,166,124,0.5)'}
            return <AudioPlayer audioFile={audioLink} playing={this.props.toggle} reset={this.props.controls} options={options}/>
        })
    }


    render() {
        return (
            <div>
                {this.renderAudioPlayers()}
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

const mapStateToProps = (state) => {
    return {
        audio: state.audio,
        toggle: state.audioToggle,
        controls: state.audioControls
    }
}
const mapDispatchToProps = {
    currentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Explore)