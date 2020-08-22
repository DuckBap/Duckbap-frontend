export const isValidUserName = (userName) => {
	let error = '';
	let status = true;
	// eslint-disable-next-line
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (userName.length < 6) {
	  status = false;
	  error = '이메일은 6자 이상이어야 합니다';
	} else if (!re.test(userName.toLowerCase())) {
	  status = false;
	  error = '이메일 주소가 유효하지 않습니다';
	}
  
	return { status, error };
  };
 
  export const isValidPassword = (password) => {
	let error = '';
	let status = true;
	if (password.length < 6) {
	  status = false;
	  error = '비밀번호는 6자 이상이어야 합니다';
	} else if (!password.split('').filter((a) => a >= 'A' && a <= 'Z').length) {
	  status = false;
	  error = '알파벳 대문자를 1개 이상 포함해야 합니다';
	}
  
	return { status, error };
  };
  