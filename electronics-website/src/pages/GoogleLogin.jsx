import React from 'react';
// import { GoogleLogin } from 'react-google-login';

const GoogleLoginComponent = ({ onGoogleLogin }) => {
  const responseGoogle = (response) => {
    if (response.profileObj) {
      onGoogleLogin(response.profileObj);
    } else {
      console.log('Google login failed');
    }
  };

  return (
    <div>
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default GoogleLoginComponent;