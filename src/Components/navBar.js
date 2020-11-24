import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../Actions/auth'


const NavBar = (props) => {
  
  const handleLogout = () => {
      localStorage.removeItem('myToken')
      props.logoutUser()
  }

  const link = `/users/${props.auth.id}`
    return(
        <Menu>
          <Link to='/home'>
            <Menu.Item header>Ster.io</Menu.Item>
          </Link>
        <Link to='/'>
          <Menu.Item
            name='logout'
            onClick={handleLogout}
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


const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = {
  logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)