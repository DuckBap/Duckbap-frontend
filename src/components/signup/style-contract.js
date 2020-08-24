import styled from 'styled-components';

export const BottomContainer = styled.div`
    width : 100%;
    border-top: 1px solid #f0f0f0;
`;

export const ContractWrapper = styled.div`
    width : 1200px;
    margin: 0px auto;
    display:flex;
    flex-flow: row;
`;

export const ContractList = styled.div`
    padding-top : 50px;
    width : 20%;
    display: flex;
    flex-flow : column;
    align-items: center;
    justify-contents: center;
`;

export const ContractObject = styled.a`
    width : 100%;
    height : 30px;
    font-size: 14px;
    padding : 2px 0px;
    text-decorate : none;
    display : flex;
    align-items: center;
    font-weight : 500;
    color : #757575;
`;