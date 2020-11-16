import React  from 'react'
import { connect } from 'react-redux'
import { currentUser } from '../Actions/auth'
import { fetchedUser } from '../Actions/user'
import { deleteCollabSuccess } from '../Actions/collabTracks'
import { deleteAssociationSuccess } from '../Actions/songs'
import { Tab, List, Icon, Grid, Image, Button, Form, TextArea } from 'semantic-ui-react'
import TrackCard from '../Components/trackCard'
import SongCard from '../Components/songCard'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import DefaultProfilePic from '../images/masterpiece-stallions-for-prince-ignas-2.png'
import axios from 'axios'



class UserPage extends React.Component {
state = {
    fetchedUser: false,
    username: '',
    email: '',
    bio: '',
    image: '',
    open: false,
    errors: ''
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

    componentDidUpdate(prevProps){
        if(this.props.match.url !== prevProps.match.url){
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
    }

    handleDelete = (track) => {
        let alert = track.songs.length === 1 ? `is 1 song` : `are ${this.props.user.songs.length} songs` 
        if(window.confirm(`There ${alert} using this track, are you you sure you want to delete this track?`)){
            fetch(`http://localhost:3000/collab_tracks/${track.id}`, {method: 'DELETE'})
            .then(resp => resp.json())
            .then(collabTrack => {
              this.props.deleteCollabSuccess(collabTrack)
            })
        }
    }

    handleDeleteAssociation = (collab_track_id, song_id) => {
        const reqObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({collab_track_id, song_id})
        }
        fetch('http://localhost:3000/song_collab', reqObj)
        .then(resp => resp.json())
        .then(data => {
            this.props.deleteAssociationSuccess(data)
        })
    }

    renderTracks = () => {
        return this.props.user.collab_tracks.map(track => {
            return <List animated celled size='tiny'>
                <TrackCard track={track} handleDelete={this.handleDelete}/></List>
        })
    }

    renderSongs = () => {
        return this.props.user.songs.map(song => {
            return <List animated celled size='tiny'>
                <SongCard song={song} handleDeleteAssociation={this.handleDeleteAssociation}/></List>
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

    handleFileUpload = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    }
    

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            open: !this.state.open
        })

        const formData = new FormData()

        for (const property in this.state) {
            formData.append(
                property, this.state[property]
            )
        }
        

        axios.patch(`http://localhost:3000/users/${this.props.auth.id}`, formData)
        .then(data => {
            if(data.data.errors){
                this.setState({
                    errors: data.data.errors
                })
            } else {
                this.props.fetchedUser(data.data)
            }
            })
    
    }

    renderErrors = () => {
        if(this.state.errors){
            alert(this.state.errors)
            this.setState({ errors: '' })
        }
    }


            render(){
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
                  const imageLink =  this.props.user.image ? `http://localhost:3000${this.props.user.image}` : DefaultProfilePic
                  return(
                      <Grid celled='internally'>
                        <Grid.Row>
                        <Grid.Column width={3}>
                            <Image style={{height: '300px'}} circular src={imageLink} />
                            <div style={{width: '300px'}}>
                                <Popup open={this.state.open} onClose={!this.state.open} trigger={button} position="right center">
                                    <div style={{ width: '250px', height: '450px'}}>
                                        <Form onSubmit={this.handleSubmit} style={{width: '250px', height: '400px'}}>
                                            <label name='username'>Username</label>
                                            <input onChange={this.handleChange} type="text" name="username" value={this.state.username}></input>
                                            <label>Email</label>
                                            <input onChange={this.handleChange} type="text" name="email" value={this.state.email}></input>
                                            <label>Bio</label>
                                            <TextArea style={{height: '200px'}} onChange={this.handleChange} name="bio" value={this.state.bio}/>
                                            <input
                                                type="file"
                                                accept="image/jpeg"
                                                onChange={this.handleFileUpload}
                                            />
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
        // audio: state.audio,
        // toggle: state.audioToggle,
        // controls: state.audioControls,
        user: state.user,
        auth: state.auth
    }
}
const mapDispatchToProps = {
    currentUser,
    fetchedUser,
    deleteCollabSuccess,
    deleteAssociationSuccess
}


export default connect(mapStateToProps, mapDispatchToProps)(UserPage)