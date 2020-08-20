import React from 'react';
import styled from 'styled-components';
import DetailPageHeader from './DetailPageHeader';
import DetailPageSummary from './DetailPageSummary';
import DetailPageMain from './DetailPageMain';

const MainBox = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f0f0f0;
  // border: 5px solid red;
`;

const MainHeader = styled.div`
  height: 15vh;
  background:white;
  font-size: 5rem;
  text-align:center;
`

function DetailPage() {
  return (
    <MainBox>
      <MainHeader>This is Header</MainHeader>
      <DetailPageHeader />
      <DetailPageSummary />
      <DetailPageMain />
    </MainBox>
  );
}

export default DetailPage;
