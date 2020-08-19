import React from 'react';
import styled from 'styled-components';
import example from './example.json'

const SummaryBox = styled.div`
  width: 100vw;
  height: 35vh;
  background: #f6f5f5;
  display: flex;
  justify-content: center;
`;

const SummaryImageBox = styled.div`
  width: 450px;
  height: 100%;
  padding: 20px;
`;

const SummaryImage = styled.img`
  width: 400px;
  height: 90%;
`;

const SummaryTextBox = styled.div`
  width: 450px;
  padding: 20px;
`;

const TextBox = styled.div`
  padding-left: 20px;
  padding-top: 15px;
`;

const TextCombine = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  padding: 10px 0px 10px 0px;
`;

const SmallText = styled.div`
  font-size: 24px;
  opacity: 0.6;
`;

const BigText = styled.div`
  font-size: 32px;
  font-weight: bold;
  padding-right: 7px;
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
