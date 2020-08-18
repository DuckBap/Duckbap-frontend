import React from 'react';
import styled from 'styled-components';
import example from '../example.json';

const MainBox = styled.div`
  width: 100vw;
  height: 10vh;
  //   background: yellow;
  //   border: 5px solid red;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: center;
`;

const HeaderTitle = styled.span`
  color: black;
  font-weight: bold;
  font-size: 2rem;
  opacity: 0.8;
  padding: 20px 0px 15px 0px;
`;

const HeaderSeller = styled.span`
  color: black;
  font-weight: bold;
  opacity: 0.6;
  font-size: 1.2rem;
`;

function DetailPageHeader() {
  return (
    <MainBox>
      <HeaderBox>
        <HeaderTitle>{example.funding.fundName}</HeaderTitle>
      </HeaderBox>
      <HeaderBox>
        <HeaderSeller>{example.funding.sellerName}</HeaderSeller>{' '}
      </HeaderBox>
    </MainBox>
  );
}

export default DetailPageHeader;
