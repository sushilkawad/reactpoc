import { Component } from 'react';

class Auth extends Component {

  render() {
    return (
      this.props.isLoggedIn ? this.props.comp : 'Please login'
    )
  }
}

export default Auth;
