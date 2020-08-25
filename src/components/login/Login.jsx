import React from 'react';
//import { TokenContext, TokenProvider } from './LoginAPI';
import LoginView from './LoginView';
const Login = () => {
	return (
	/* 토큰 만들다 망함ㅠ */
	 /* <TokenProvider>
		<TokenContext.Consumer>
		  {({ token, saveToken }) =>
			token ? <div /> : <LoginView onLogin={saveToken} />}
		</TokenContext.Consumer>
	  </TokenProvider>*/
	  <LoginView />
	  );
}
  
  export default Login;