// Write your code here

import {Component} from 'react'

import Message from '../Message'
import Logout from '../Logout'
import Login from '../Login'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickButton = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="home-page">
        <div className="login-container">
          <Message isLogIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout logOut={this.onClickButton} />
          ) : (
            <Login logIn={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
