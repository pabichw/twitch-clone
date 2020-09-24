import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../../store/auth/actions';
import { AuthStore } from '../../../store/auth/types';
import AnonUserContainer from './components/AnonUserContainer';

type AuthNavProps = {
  auth: AuthStore;
  doSignIn: (SignInCredentials) => void;
};

class AuthNav extends Component<AuthNavProps> {
  render() {
    const {
      auth: { isAuthenticated, isLoading },
    } = this.props;

    return (
      <div
        onClick={() => {
          console.log(this.props);
        }}
      >
        {isAuthenticated ? (
          'LoggedIn'
        ) : (
          <AnonUserContainer
            onProfileIconClick={() => console.log('on profile pic')}
            onSignInClick={() => console.log('on sign in')}
            onSignUpClick={() => console.log('on sign up')}
          />
        )}
        {isLoading && 'Loading'}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });
const mapDispatchToProps = {
  doSignIn: signIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthNav);
