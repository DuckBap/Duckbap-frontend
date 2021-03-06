import styled, { createGlobalStyle } from 'styled-components';
// import { Link } from 'react-router-dom';

const size = {
  mobile: '770px',
  tabletS: '1023px',
  tabletM: '1220px',
  tabletL: '1280px',
  laptop: '1460px',
  desktop: '1700px',
};

export const theme = {
  mobile: `(max-width: ${size.mobile})`,
  tabletS: `(max-width: ${size.tabletS})`,
  tabletM: `(max-width: ${size.tabletM})`,
  tabletL: `(max-width: ${size.tabletL})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const Wrapper = styled.div`
  width: 150vw;
  padding: 50px 50px;
  margin-top: 20px;
  border-radius: 40px;
  display: flex;
  color: grey;
  flex-direction: column;
  border: 1px solid rgb(230, 230, 230);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.04);
  border-radius: 5px;

  &:first child hi > {
    margin-bottom: 9px;
    font-size: 13px;
  }
  @media (min-width: 768px) {
    max-width: 400px;
    box-sizing: border-box;
  }
`;

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/earlyaccess/notosanskr.css');
      font-family: "Noto Sans KR Light", Sans-serif, !important;
`;

export const Container = styled.div`
  display: flex;
  margin: 2.5rem auto;
  max-width: 25em;
  width: 90vw;
  font-size: 10pt;
  @import url('https://fonts.googleapis.com/earlyaccess/notosanskr.css');
  font-family: 'Noto Sans KR Light', Sans-serif !important;
`;

const handleColorType = (color) => {
  switch (color) {
    case 'facebook':
      return 'background: rgb(109, 132, 180);';
    case 'naver':
      return 'background: rgb(30, 200, 0);';
    case 'login':
      return 'background: #ffcf33;';
    default:
      return 'background: #ffffff;';
  }
};

export const Btn = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: none;
  outline: none;
  margin: 0.3rem;
  color: #ffffff;
  font-weight: 600;
  ${({ color }) => handleColorType(color)};
  cursor: pointer;
  &:hover {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.04);
  }
  &:error-input {
    border: 2px solid #ff3434;
    border-radius: 4px;
  }
`;

export const ErrorText = styled.p`
  margin: 0 5px 0;
  padding: 0;
  color: #ff3434;
  font-size: 12px;
  text-align: left;
`;

export const Signup = styled.a`
  font-size: 13px;
  color: rgb(230, 160, 120);
  text-decoration: none;
  text-align: right;
  &:hover {
    color: rgb(245, 134, 71);
    text-decoration: underline;
  }
`;

export const ForgotPassword = styled.a`
  font-size: 14px;
  color: rgb(230, 160, 120);
  text-decoration: none;
  text-align: right;
  text-align: center;
  text-decoration: none;
  margin-left: 7px;
  margin-top: 15px;
  &:hover {
    color: rgb(245, 134, 71);
    text-decoration: underline;
  }
`;

export const StyledText = styled.div`
  font-size: 12px;
  text-align: left;
  text-decoration: none;
  margin-left: 7px;
`;

export const StyledText1 = styled.div`
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Space = styled.div`
  font-size: 13px;
  margin-top: 14px;
  margin-bottom: 14px;
`;

export const Line = styled.div`
  border-bottom: 0.3px solid #f2f2f2;
  margin-top: 13px;
  width: 100%;
`;
