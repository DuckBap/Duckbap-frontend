import React, { useState } from 'react';
import axios from 'axios';

export const TokenContext = React.createContext({});

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  return (
    <TokenContext.Provider
      value={{
        token: token,
        saveToken: setToken,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export const loggingIn = async (loginData) => {
  const url = 'https://prefab-imagery-286323.uc.r.appspot.com/v1/accounts/login';
  try {
    /*const res = await fetch(url, {
   	 		method: 'POST',
    		headers: {
      		Accept: 'application/json',
      		'Content-Type': 'application/json',
    		},
    		body: JSON.stringify(loginData),
		  	});*/
    const response = await axios.post(url, loginData);
    console.log(response);
    if (response.ok) {
      const jsonresponse = await response.json();
      console.log(jsonresponse);
      return jsonresponse;
    }
    if (response.status === 200) {
      alert('200');
    }
  } catch (reason) {
    if (reason.response.status === 401)
      throw new Error('이메일 또는 비밀번호를 다시 확인해 주세요');
    else throw new Error('문제가 발생했습니다! 나중에 시도해 주세요');
  }
};
