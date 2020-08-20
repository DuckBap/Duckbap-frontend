import styled from 'styled-components';

export const IdoListContainer = styled.div`

`;
export const IdolProductItems = styled.div`
  display: flex;
  width: 96%;
  max-width: 1200px;
  padding: 30px 0;
  border-top: 1px solid rgb(221, 221, 221);
  cursor: pointer;
  justify-content: center;

  .text-container {
    width: 60%;
  }

  .product-img-container {
    overflow: hidden;
    min-width: 300px;
    min-height: 200px;
    width: 300px;
    height: 200px;
    margin-right: 50px;
    border-radius: 16px;
  }

  .product-img {
    overflow: hidden;
    min-width: 300px;
    min-height: 200px;
    width: 300px;
    height: 200px;
    margin-right: 50px;

    object-fit: cover;
  }

  .product-img:hover {
    transition: 0.2s ease-in;
    transform: scale(1.1);
  }

  span {
    display: inline-block;
  }

  .funding-name {
    padding: 10px 0;
    font-size: 20px;
    font-weight: 700;
    color: rgb(61, 61, 61);
  }

  .funding-name:hover {
    padding: 10px 0;
    font-size: 20px;
    font-weight: 700;
    color: rgb(123, 123, 123);
  }

  .seller-name {
    color: rgb(154, 154, 154);
    padding: 10px 0;
    margin-left: 12px;
  }

  .description {
    display: block;
    box-sizing: border-box;
    padding: 10px 6px 40px;
  }

  .achievement-rate-bar {
    position: relative;
    height: 2px;
    margin-bottom: 30px;
  }

  .achievement-rate-bar > .foreground {
    background: rgb(255, 120, 120);
    position: absolute;
    height: 100%;
    z-index: 2;
    width: 60%;
  }

  .achievement-rate-bar > .background {
    background: rgb(206, 206, 206);
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
  }

  .d-day {
    /* display: block; */
    color: rgb(158, 158, 158);
    font-size: 16px;
  }

  .d-day > span {
    margin-left: 4px;
  }

  .horizontal-line {
    height: 1px;
    width: 80px;
    margin: 14px 0 20px;
    background: rgb(206, 206, 206);
  }

  .funding-header {
    min-width: 1000px;
  }

  .achievement-rate {
    color: rgb(61, 61, 61);
    font-weight: 600;
  }

  .achievement-rate-value {
    color: rgb(255, 120, 120);
    font-weight: 700;
    font-size: 20px;
  }

  .funding-status {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
