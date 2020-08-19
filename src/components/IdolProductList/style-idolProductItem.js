import styled from 'styled-components';

export const IdolProductItems = styled.div`
  display: flex;
  width: 96%;
  max-width: 1200px;
  padding: 30px 0;
  border-top: 1px solid rgb(221, 221, 221);
  cursor: pointer;
  justify-content: center;
`;

export const TextContainer = styled.div`
    width: 60%;
`;

export const ProductImgContainer = styled.div`
  overflow: hidden;
    min-width: 300px;
    min-height: 200px;
    width: 300px;
    height: 200px;
    margin-right: 50px;
    border-radius: 16px;
`;

export const ProductImg = styled.img`
    overflow: hidden;
    min-width: 300px;
    min-height: 200px;
    width: 300px;
    height: 200px;
    margin-right: 50px;

    object-fit: cover;
  &:hover {
    transition: 0.2s ease-in;
    transform: scale(1.1);
`;

export const Span = styled.span`
    display: inline-block;
    &.d-day {
      /* display: block; */
      color: rgb(158, 158, 158);
      font-size: 16px;
    }
  
    &.d-day > span {
      margin-left: 4px;
    }

    &.achievement-rate {
      color: rgb(61, 61, 61);
      font-weight: 600;
    }
  
    &.achievement-rate-value {
      color: rgb(255, 120, 120);
      font-weight: 700;
      font-size: 20px;
    }

  &.funding-name {
    padding: 10px 0;
    font-size: 20px;
    font-weight: 700;
    color: rgb(61, 61, 61);
  }

  &.funding-name:hover {
    padding: 10px 0;
    font-size: 20px;
    font-weight: 700;
    color: rgb(123, 123, 123);
  }

  &.seller-name {
    color: rgb(154, 154, 154);
    padding: 10px 0;
    margin-left: 12px;
  }

  &.description {
    display: block;
    box-sizing: border-box;
    padding: 10px 6px 40px;
  }
`;

export const AchievementRateBar = styled.div`
    position: relative;
    height: 2px;
    margin-bottom: 30px;

    &.foreground {
    background: rgb(255, 120, 120);
    position: absolute;
    height: 100%;
    z-index: 2;
    width: 60%;
    }

    &.background {
    background: rgb(206, 206, 206);
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
`;

export const HorizontalLine = styled.div`
    height: 1px;
    width: 80px;
    margin: 14px 0 20px;
    background: rgb(206, 206, 206);
`;

export const FundingHeader = styled.div`
    min-width: 1000px;
`;

export const FundingStatus = styled.div`  
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
