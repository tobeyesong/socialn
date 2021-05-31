/** @format */

import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions';

import { LogoutIcon, LoginIcon } from '@heroicons/react/outline';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '1045759645178-jn8hfn943eqdd77knth66s4mnvjhpeqv.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <div className="grid grid-cols-1 gap-3 mt-1">
          <button
            onClick={this.onSignOutClick}
            type="button"
            className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-red-500 bg-indigo-100 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <LogoutIcon className="-ml-0.5 mr-2 h-4 w-4" />
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <div className="grid grid-cols-1 gap-3 mt-1 shadow-2xl">
          <button
            onClick={this.onSignInClick}
            type="button"
            className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 transition duration-200 ease-in-out bg-green-200 border border-transparent rounded-md text-white-100 hover:bg-red-500 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <LoginIcon className="-ml-0.5 mr-2 h-4 w-4" />
            Sign In w/ Google
          </button>
        </div>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
