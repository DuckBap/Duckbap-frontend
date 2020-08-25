import React, { useState } from "react";

export const loggingIn = async (loginData) => {
	const url = 'http://localhost:3001/profile';
	const response = await fetch(url, {
	  method: "POST",
	  headers: {
		"Content-Type": "application/json",
	  },
	  body: JSON.stringify(loginData),
	});
	console.log(loginData);
	if (response.ok) {
	  const jsonresponse = await response.json();
	  console.log(jsonresponse);
	  return jsonresponse;
	}
	if (response.status === 401) {
	  throw new Error('이메일 또는 비밀번호를 다시 확인해 주세요');
	}
	throw new Error('문제가 발생했습니다! 나중에 시도해 주세요');
};

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