import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../Actions/auth'


class NavBar extends React.Component {

  handleLogout = () => {
    localStorage.removeItem('myToken')
    this.props.logoutUser()
}

    render(){
      const link = `/users/${this.props.auth.id}`
        return(
            <Menu>
              <Link to='/home'>
                <Menu.Item header>Ster.io</Menu.Item>
              </Link>
            <Link to='/login'>
              <Menu.Item
                name='logout'
                onClick={this.handleLogout}
              />
            </Link>
            <Link to='/home/upload'>
              <Menu.Item
                name='Upload'
              />
            </Link>
            <Link to={link}>
              <Menu.Item
              name='My Profile'
              />
            </Link>
          </Menu>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = {
  logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)