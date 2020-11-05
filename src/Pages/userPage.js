import React  from 'react'
import { connect } from 'react-redux'
import { currentUser } from '../Actions/auth'
import { fetchedUser } from '../Actions/user'
import { Tab, List, Icon, Grid, Image, Button, Form, TextArea } from 'semantic-ui-react'
import TrackCard from '../Components/trackCard'
import SongCard from '../Components/songCard'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import '../App.css'



class UserPage extends React.Component {
state = {
    fetchedUser: false,
    username: '',
    email: '',
    bio: '',
    open: false
}

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
                        const userPageId = this.props.match.params.id
                        fetch(`http://localhost:3000/users/${userPageId}`)
                        .then(resp => resp.json())
                        .then(user => {
                            this.props.fetchedUser(user)
                            this.setState({
                                fetchedUser: true,
                                username: this.props.user.username,
                                email: this.props.user.email,
                                bio: this.props.user.bio
                            })
                        })
                    }
                })
        }
    }


    renderTracks = () => {
        return this.props.user.collab_tracks.map(track => {
            return <List animated celled size='tiny'>
                <TrackCard track={track} /></List>
        })
    }

    renderSongs = () => {
        return this.props.user.songs.map(song => {
            return <List animated celled size='tiny'>
                <SongCard song={song}/></List>
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.setState({
            open: true
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            open: !this.state.open
        })

        const reqObj = {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({user: this.state})
        }

        fetch(`http://localhost:3000/users/${this.props.auth.id}`, reqObj)
        .then(resp => resp.json())
        .then(user => {
            this.props.fetchedUser(user)
        })
    }

    handleUrlChange = () => {
        this.props.history.listen((location) => {
            const url = location.pathname.slice(0, -1)
            if(url === '/users/'){
                window.location.reload()
            }
        })
    }

            render(){
                this.handleUrlChange()
                const panes = [
                    { menuItem: 'Tracks', render: () => <Tab.Pane>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', flexBasis: '100%' }}>
                                <div style={{float: 'left'}}>Title</div>
                                <div style={{ marginLeft: '35px',float: 'middle', display: 'flex', justifyContent: 'center', flexBasis: '100%'}}>Genre</div>
                                <div style={{float: 'right'}}>Instrument</div>
                            </div>
                            {this.state.fetchedUser ? this.renderTracks() : null}
                        </div>
                        </Tab.Pane> },
                    { menuItem: 'Songs', render: () => <Tab.Pane>
                        <div>
                            <div style={{display: 'flex', justifyContent: 'flex-start', flexBasis: '100%' }}>
                                <div style={{float: 'left'}}>Title</div>
                                <div style={{marginLeft: '35px',float: 'middle', display: 'flex', justifyContent: 'center', flexBasis: '100%'}}>Genre</div>
                                <div style={{float: 'right'}}>Instrument</div>
                            </div>
                            {this.state.fetchedUser ? this.renderSongs() : null}
                        </div>
                        </Tab.Pane> }
                  ]
                  const { fname, lname, age, username, email, bio } = this.props.user
                  const tabs = () => <Tab panes={panes} />
                  const button = this.props.auth.id === this.props.user.id ? <button><Icon name='edit'/></button> : null
                  return(
                      <Grid celled='internally'>
            <Grid.Row>
              <Grid.Column width={4}>
              <Image circular src='https://cms.qz.com/wp-content/uploads/2019/03/shutterstock_editorial_5881911a_huge.jpg?quality=75&strip=all&w=1200&h=900&crop=1' />
              <div style={{width: '300px'}}>
                <Popup open={this.state.open} onClose={!this.state.open} trigger={button} position="right center">
                    <div style={{ width: '250px'}}>
                    <Form onSubmit={this.handleSubmit} style={{width: '250px', height: '400px'}}>
                <label name='username'>Username</label>
                <input onChange={this.handleChange} type="text" name="username" value={this.state.username}></input>
                <label>Email</label>
                <input onChange={this.handleChange} type="text" name="email" value={this.state.email}></input>
                <label>Bio</label>
                <TextArea style={{height: '200px'}} onChange={this.handleChange} name="bio" value={this.state.bio}/>
                <Button type='submit'>Update</Button>
                </Form>
                    </div>
                </Popup>
                </div>
                <h3>Username: {username}</h3>
                <h4>Name: {fname} {lname}</h4>
                <h4>Age: {age}</h4>
                <h4>Email: {email}</h4>
                <h5>Bio: {bio}</h5>
              </Grid.Column>
              <Grid.Column width={10}>
                <div>
                    {tabs()}
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        audio: state.audio,
        toggle: state.audioToggle,
        controls: state.audioControls,
        user: state.user,
        auth: state.auth
    }
}
const mapDispatchToProps = {
    currentUser,
    fetchedUser
}


export default connect(mapStateToProps, mapDispatchToProps)(UserPage)