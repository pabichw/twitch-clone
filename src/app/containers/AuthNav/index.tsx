import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../../store/auth/actions';
import { AuthStore } from '../../../store/auth/types';
import AnonUserContainer from './components/AnonUserContainer';
import { togglePopup } from '../../../store/layout/actions';
import SignInUp from '../../components/Popup/content/SignInUp';

type AuthNavProps = {
  auth: AuthStore;
  signIn: (SignInCredentials) => void;
  isMobile: boolean;
  togglePopup: (any) => void;
};

class AuthNav extends Component<AuthNavProps> {
  render() {
    const {
      auth: { isUserAuthenticated },
      togglePopup,
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
              togglePopup({ isVisible: true, content: <SignInUp /> });
            }}
            onSignUpClick={() =>
              togglePopup({ isVisible: true, content: <SignInUp /> })
            }
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
  togglePopup,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthNav);
