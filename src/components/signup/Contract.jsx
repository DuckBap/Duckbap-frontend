import React, { Component } from 'react';
import { ThemeProvider } from "styled-components";
import {
    ContractList, ContractObject, BottomContainer,
} from './style-contract';

class Contract extends Component {
    render() {
        return (
            <BottomContainer>
                <ContractList>
                    <ContractObject>이용약관</ContractObject>
                    <ContractObject>개인정보</ContractObject>
                    <ContractObject>수수료 정책</ContractObject>
                    <ContractObject>Contact Us</ContractObject>
                </ContractList>
            </BottomContainer>
        );
    }
}

export default Contract;
