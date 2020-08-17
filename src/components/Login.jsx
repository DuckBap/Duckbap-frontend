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
  // ForgotPassword,
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
    handleSubmit, handleBlur, handleChange, values, errors, isSubmitted,
  } = useValidateForm(
    STATE_INIT,
    validateAuth,
  );
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Wrapper>
          <form onSubmit={handleSubmit}>
            <Btn className="login-facebook" color="facebook">
              페이스북 계정으로 로그인하기
            </Btn>
            <Btn className="login-naver" color="naver">
              네이버 계정으로 로그인하기
            </Btn>
            <StyledText1>또는</StyledText1>
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
            <Space />
            <Btn className="login" color="login" disabled={isSubmitted}>로그인</Btn>
            <Space />
            <StyledText>아직 계정이 없으신가요?</StyledText>
            <Signup href="/sign-up"><StyledText1>덕질이 밥먹여준다 가입하기</StyledText1></Signup>
            <Line />
            <StyledText>
              <ForgotPassword href="/sign-up"><StyledText1>혹시 비밀번호를 잊으셨나요?</StyledText1></ForgotPassword>
            </StyledText>
          </form>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
