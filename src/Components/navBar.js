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
        return(
            <Menu>
            <Menu.Item header>Ster.io</Menu.Item>
            <Link to='/login'>
            <Menu.Item
              name='logout'
              onClick={this.handleLogout}
            />
            </Link>
            <Link to='/home/upload'>
            <Menu.Item
              name='upload'
            />
            </Link>
            <Menu.Item
              name='locations'
            />
          </Menu>
        )
    }
}

const mapDispatchToProps = {
  logoutUser
}

export default connect(null, mapDispatchToProps)(NavBar)