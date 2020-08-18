import React from 'react';
import styled from 'styled-components';
import example from '../example.json';

const MainBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const MainImage = styled.img`
  width: 800px;
  padding-top: 20px;
`;

function DetailPageMain() {
  return (
    <MainBox>
      <MainImage src={example.funding.detailedImgUrl} />
    </MainBox>
  );
}

export default DetailPageMain;
