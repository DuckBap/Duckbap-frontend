import React from 'react';
import styled from 'styled-components';
import example from './example.json';

const MainBox = styled.div`
  width: 100vw;
  height: 20vh;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: center;
  height:9vh;
  padding-top:1vh;


`;

const HeaderTitle = styled.span`
  color: black;
  font-weight: bold;
  font-size: 4rem;
  line-height:9vh;


`;

const HeaderSeller = styled.span`
  color: black;
  font-weight: bold;
  opacity: 0.6;
  font-size: 1.8rem;
  line-height:9vh;
`;

function DetailPageHeader() {
  return (
    <MainBox>
      <HeaderBox>
        <HeaderTitle>{example.funding.fundName}</HeaderTitle>
      </HeaderBox>
      <HeaderBox >
        <HeaderSeller>{example.funding.sellerName}</HeaderSeller>{' '}
      </HeaderBox>
    </MainBox>
  );
}

export default DetailPageHeader;
