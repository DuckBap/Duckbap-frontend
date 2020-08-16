import React from 'react';
import { ThemeProvider } from "styled-components";
import {
    Container, Wrapper, theme, StyledText1, ErrorText,
    Btn, Signup, Space, StyledText, Line, ForgotPassword,
} from '../styles/global'
import { Input } from '../styles/style-input';
import validateAuth from "./login/validateAuth";
import useValidateForm from "./login/useValidateForm"

const Login = () => {
    const STATE_INIT = {
        email: "",
        password: ""
      };

      const {
        handleSubmit,
        handleBlur,
        handleChange,
        values,
        errors,
        isSubmitted
      } = useValidateForm(STATE_INIT, validateAuth); 
    return (
        <ThemeProvider theme={theme}>
        <Container><Wrapper>
        <form onSubmit={handleSubmit}>
            <Btn className="login-facebook" color="facebook">페이스북 계정으로 로그인하기</Btn>
            <Btn className="login-naver" color="naver">네이버 계정으로 로그인하기</Btn>
           <StyledText1>또는</StyledText1>
        <Input 
            type="text" 
            placeholder="비밀번호 입력" 
            onChange={handleChange}
            onBlur={handleBlur}
            name="email"
            className={errors.email && "error-input"}
            autoComplete="off"
            value={values.email}  
        />
        {errors.email && <ErrorText>{errors.email}</ErrorText>}
        <Input 
            type="text" 
            placeholder="비밀번호 입력" 
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && "error-input"}
            name="password"
            autoComplete="off"
            value={values.password}
        />
        {errors.password && <ErrorText>{errors.password}</ErrorText>}
        <Space />
        <Btn className="login" color="login" disabled={isSubmitted}>
            로그인
        </Btn>
        <Space /><Space /><Space />
          <StyledText>아직 계정이 없으신가요? <Signup to="/sign-up">덕질이 밥먹여준다 가입하기</Signup></StyledText>
          <Line />
        <Space/>
          <ForgotPassword to="/">혹시 비밀번호를 잊으셨나요?</ForgotPassword>\
          </form>
          </Wrapper></Container>
        </ThemeProvider>
    );
}

export default Login;