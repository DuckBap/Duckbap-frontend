import React from 'react';
import { TokenContext, TokenProvider } from './loginAPI';
import LoginView from './loginView';
import MainPage from '../Main/index';

const Login = () => {
  return (
    <TokenProvider>
      <TokenContext.Consumer>
        {({ token, saveToken }) => (token ? <MainPage /> : <LoginView onLogin={saveToken} />)}
      </TokenContext.Consumer>
    </TokenProvider>
  );
};

export default Login;
