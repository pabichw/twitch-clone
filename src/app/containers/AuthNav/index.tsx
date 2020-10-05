import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../../store/auth/actions';
import { AuthStore } from '../../../store/auth/types';
import AnonUserContainer from './components/AnonUserContainer';

type AuthNavProps = {
  auth: AuthStore;
  signIn: (SignInCredentials) => void;
  isMobile: boolean;
};

class AuthNav extends Component<AuthNavProps> {
  render() {
    const {
      auth: { isUserAuthenticated },
      isMobile,
    } = this.props;

    return (
      <div>
        {isUserAuthenticated ? (
          'LoggedIn'
        ) : (
          <AnonUserContainer
            onProfileIconClick={() => console.log('on profile pic')}
            onSignInClick={() => {
              console.log('on sign in');
              this.props.signIn({ email: 'dupa', password: 'zyrafydoszafy' });
            }}
            onSignUpClick={() => console.log('on sign up')}
            isMobile={isMobile}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });
const mapDispatchToProps = {
  signIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthNav);
