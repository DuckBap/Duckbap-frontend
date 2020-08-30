import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Input } from './input.style';
import {
  Container,
  Wrapper,
  Signup,
  theme,
  StyledText1,
  Btn,
  ForgotPassword,
  Space,
  StyledText,
  Line,
} from './common.style';
import { loggingIn } from './loginAPI';

const LoginView = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [dupError, setdupError] = useState('');

  const onFacebookBtn = (e) => {
    alert('FaceBook Login');
    console.log('FaceBook SignUp');
  };

  const onNaverBtn = (e) => {
    alert('Naver Login');
    console.log('Naver SignUp');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      userName: userName,
      password: password,
    };
    try {
      await loggingIn(loginData);
      //const tokenObject = await loggingIn(loginData);
      //const token = tokenObject.token;
      //onLogin(token);
      if (Object.keys(dupError).length === 0) alert(' 로긴 ');
    } catch (error) {
      setdupError(() => error.message);
    }
  };

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
          <form onSubmit={handleSubmit}>
            <StyledText1 className="text1">또는</StyledText1>
            <div className="userName-input">
              <Input
                type="text"
                placeholder="이메일을 입력해주세요"
                required
                autoFocus
                autoComplete="off"
                name="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="password-input">
              <Input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                required
                autoComplete="off"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Space />
            <Btn
              type="submit"
              name="submit"
              className="login-section-submit cursor-pointer"
              value="Login"
              color="login"
            >
              로그인
            </Btn>
            <p className="error-message">{dupError && dupError}</p>
          </form>
          <Space />
          <StyledText className="text2">아직 계정이 없으신가요?</StyledText>
          <div className="registration">
            <Signup href="/signup">
              <StyledText1>덕질이 밥먹여준다 가입하기</StyledText1>
            </Signup>
          </div>
          <Line />
          <div className="forgot-password">
            <StyledText>
              <ForgotPassword href="/signup">
                <StyledText1>혹시 비밀번호를 잊으셨나요?</StyledText1>
              </ForgotPassword>
            </StyledText>
          </div>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};

export default LoginView;
