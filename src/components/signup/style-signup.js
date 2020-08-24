import styled from 'styled-components';
import { handleColorType } from './global'

export const Button = styled.button`
    width:100%;
    height:40px;
    border-radius: 5px;
    border: 0px solid black;
    margin: 0.3rem;
    color: #ffffff;
    font-weight: 600;
    ${({ color }) => handleColorType(color)};
    cursor:pointer;
    &:focus {
      box-shadow : 0 0 5px rgba(0,0,0,0.04);
    }
`;

export const SignupTable = styled.div`
    width: 100%;
`;

export const SignupTableSubTitle = styled.div`
    margin-top : 10px;
    width: 100%;
    padding: 0px 10px;
    font-size: 14px;
`;

export const Input = styled.input.attrs(props => ({
    type: props.type
  }))`
  width:100%;
  height:40px;
  padding : 0px 10px;
  background: transparent;
  border-radius: 3px;
  border: 1px solid rgb(230, 230, 230);
  box-sizing:border-box;
  text-align:left;
  margin: 0.2rem;
`;

export const Signup = styled.a`
  font-size : 16px;
  color : rgb(230, 160, 120);
  text-decoration : none;
`;
