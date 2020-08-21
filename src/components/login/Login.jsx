import React, { useState, useCallback, memo, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import Input from './style-input';
import { Container,  Wrapper,  Signup,  theme,  StyledText1,  
  Btn,  ForgotPassword, Space,  StyledText,  Line } from './global';
import { isValidPassword, isValidUserName } from './Validity';
import dummy from './dummy.json'; 

const Login = ({ className, ...props }) => {
  const [userName, setUserName] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const userNameValidity = isValidUserName(userName.value);
  const passwordValidity = isValidPassword(password.value);

  const onFacebookBtn = (e) => {
    alert('FaceBook Login');
    console.log('FaceBook SignUp');
  }
  
  const onNaverBtn = (e) => {
    alert('Naver Login');
    console.log("Naver SignUp");
  }

  const formSubmit = useCallback(async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      await (
       await fetch('https://prefab-imagery-286323.uc.r.appspot.com/v1/login')).json();
      
      if (error)setError('');
    } catch (err) {
      console.error(err);
      setError('아이디 또는 비밀번호가 올바르지 않습니다. 다시 시도해 보세요');
    }
    setLoading(false);
  }, [error]);

  const handleEmailChange = useCallback((e) => {
    setUserName({ value: e.target.value, error: isValidUserName(e.target.value).error });
  }, [setUserName]);

  const handlePasswordChange = useCallback((e) => {
    setPassword({ value: e.target.value, error: isValidPassword(e.target.value).error });
  }, [setPassword]);

  useEffect(() => {
    const newDisabledState = !!(userNameValidity.error || passwordValidity.error);
    if (disabled !== newDisabledState) 
      setDisabled(newDisabledState);
  }, [userNameValidity.error, passwordValidity.error, disabled]);

  
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Wrapper>
            <Btn className="login-facebook" color="facebook" onClick={onFacebookBtn}>
              페이스북 계정으로 로그인하기
            </Btn>
            <Btn className="login-naver" color="naver" onClick={onNaverBtn}>
              네이버 계정으로 로그인하기
            </Btn>
            <form onSubmit={formSubmit}> 
              <StyledText1 className="text1">또는</StyledText1>
              <div className="userName-input">
                <Input
                  type="userName"
                  placeholder="이메일 주소 입력"
                  required value={userName.value}
                  error={userName.error}
                  success={userNameValidity.status}
                  onChange={handleEmailChange}
                  name="userName"
                  autoComplete="off"
                />
              </div>
              <div className="password-input">
                <Input
                  type="password"
                  placeholder="비밀번호 입력"
                  error={password.error}
                  onChange={handlePasswordChange}
                  success={passwordValidity.status} 
                  name="password"
                  autoComplete="off"
                  required value={password.value}
                />
              </div>
              <Space />
              <Btn 
                  type="submit" name="submit" 
                  className="login-section-submit cursor-pointer"
                  value="Login" color="login" disabled={disabled || loading}>
                로그인
              </Btn>
            </form>
            <Space />
            <StyledText className="text2">
              아직 계정이 없으신가요?
            </StyledText>
            <div className="registration">
              <Signup href="/sign-up">
                <StyledText1>
                  덕질이 밥먹여준다 가입하기
                </StyledText1>
              </Signup>
            </div>
            <Line />
            <div className="forgot-password">
              <StyledText>
                <ForgotPassword href="/sign-up">
                  <StyledText1>
                    혹시 비밀번호를 잊으셨나요?
                  </StyledText1>
                </ForgotPassword>
              </StyledText>
            </div>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};

Login.propTypes = {
  className: PropTypes.string,
};
Login.defaultProps = {
  className: '',
};

export default memo(Login);
//export default Login;
