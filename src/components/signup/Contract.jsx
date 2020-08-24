import React from 'react';
import {
  ContractList, ContractObject, BottomContainer, ContractWrapper,
} from './style-contract';

export default function Contract() {
  return (
    <BottomContainer>
      <ContractWrapper>
        <ContractList>
          <ContractObject>이용약관</ContractObject>
          <ContractObject>개인정보</ContractObject>
          <ContractObject>수수료 정책</ContractObject>
          <ContractObject>Contact Us</ContractObject>
        </ContractList>
        <ContractList>
          <ContractObject>이용약관</ContractObject>
          <ContractObject>개인정보</ContractObject>
          <ContractObject>수수료 정책</ContractObject>
          <ContractObject>Contact Us</ContractObject>
        </ContractList>
      </ContractWrapper>
    </BottomContainer>
  );
}
