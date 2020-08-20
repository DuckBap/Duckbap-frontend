import React from 'react';
import styled from 'styled-components';
import example from './example.json'

const SummaryBox = styled.div`
  width: 100vw;
  height: 70vh;
  background: #f6f5f5;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items:center;
`;

const SummaryImageBox = styled.div`
  width: 60%;
  height: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
  background:yellow;
 
`;

const SummaryImage = styled.img`
  width: 90%;
  height: 90%;
  
`;

const SummaryTextBox = styled.div`
  display:flex;
  flex-direction:column;
  flex-wrap:no-wrap;
  justify-content:center;
  width: 30wh;
`;

const TextBox = styled.div`

`;

const TextCombine = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`;

const SmallText = styled.div`
  font-size: 24px;
  opacity: 0.6;
`;

const BigText = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

function DetailPageSummary() {
  return (
    <SummaryBox>
      <SummaryImageBox>
        <SummaryImage src={example.funding.fundingImgUrls} />
      </SummaryImageBox>
      <SummaryTextBox>
        <TextBox>
          <SmallText>가격</SmallText>
          <TextCombine>
            <BigText>{example.funding.price}</BigText>
            <SmallText>원</SmallText>
          </TextCombine>
        </TextBox>
        <TextBox>
          <SmallText>남은 시간</SmallText>
          <TextCombine>
            <BigText>{example.funding.dDay}</BigText>
            <SmallText>일</SmallText>
          </TextCombine>
        </TextBox>
        <TextBox>
          <SmallText>달성도</SmallText>
          <TextCombine>
            <BigText>{example.funding.achievementRate}</BigText>
            <SmallText>%</SmallText>
          </TextCombine>
        </TextBox>
        <TextBox>
          <SmallText>후원자</SmallText>
          <TextCombine>
            <BigText>{example.funding.salesAmount}</BigText>
            <SmallText>명</SmallText>
          </TextCombine>
        </TextBox>
      </SummaryTextBox>
    </SummaryBox>
  );
}

export default DetailPageSummary;
