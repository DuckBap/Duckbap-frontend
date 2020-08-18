import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Container,
  Wrapper,
  Signup,
  theme,
  StyledText1,
  ErrorText,
  Btn,
  ForgotPassword,
  Space,
  StyledText,
  Line,
} from './login/global';
import { Input } from './login/style-input';
import validateAuth from './login/validateAuth';
import useValidateForm from './login/useValidateForm';

const Login = () => {
  const STATE_INIT = {
    email: '',
    password: '',
  };

  const {
    onFacebookBtn, onNaverBtn, handleSubmit, handleBlur, handleChange, values, errors, isSubmitted,
  } = useValidateForm(
    STATE_INIT,
    validateAuth,
  );

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
            {/* 엔터키로 로그인 버튼 누르는 기능 가능하게 만듦 */} 
            <form onSubmit={handleSubmit}> 
              <StyledText1 className="text1">또는</StyledText1>
              <div className="email-input">
                <Input
                  type="text"
                  placeholder="이메일 주소 입력"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                  className={errors.email && 'error-input'}
                  autoComplete="off"
                  value={values.email}
                />
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
              </div>
              <div className="password-input">
                <Input
                  type="text"
                  placeholder="비밀번호 입력"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.password && 'error-input'}
                  name="password"
                  autoComplete="off"
                  value={values.password}
                />
              {errors.password && <ErrorText>{errors.password}</ErrorText>}
              </div>
              <Space />
              <Btn type="submit" className="login" color="login" /* onClick={handleSubmit} */ disabled={isSubmitted}>로그인</Btn>
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

export default Login;
