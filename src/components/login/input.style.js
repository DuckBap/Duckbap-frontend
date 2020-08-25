import React from 'react';
import styled from 'styled-components';

const LabelWrapper = styled.div`
  & + & {
    margin-top: 8px;
  }
`;

const Label = styled.div`
  font-size: 13px;
  color: grey;
  margin-left: 6px;
`;

export const Input = styled.input.attrs((props) => ({
  type: props.type,
}))`
  width: 100%;
  height: 40px;
  padding: 0px 10px;
  background: transparent;
  border-radius: 3px;
  border: 1px solid rgb(230, 230, 230);
  box-sizing: border-box;
  text-align: left;
  ::placeholder {
    color: #b8b8b8;
    font-weight: none;
  }
  margin: 0.3rem;
`;

export const LabelInput = styled.input.attrs((props) => ({
  type: props.type,
}))`
  width: 100%;
  height: 40px;
  padding: 0px 10px;
  background: transparent;
  border-radius: 3px;
  border: 1px solid rgb(230, 230, 230);
  box-sizing: border-box;
  text-align: left;
  ::placeholder {
    color: #b8b8b8;
    font-weight: none;
  }
  margin: 0.3rem;
`;

export const InputWithLabel = ({ label, ...rest }) => (
  <LabelWrapper>
    <Label>{label}</Label>
    <LabelInput {...rest} />
  </LabelWrapper>
);
