import styled from 'styled-components';

export const OrderHistoryCard = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  justify-content: flex-start;
  cursor: pointer;
  border-radius: 10px;
  margin-bottom: 30px;
  padding-left: 30px;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0);
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
  &:hover {
    box-shadow: inset 1px 4px 10px -6px rgba(0, 0, 0, 0.3), 0 0 3px rgba(0, 0, 0, 0.1);

    background-color: #f5f5f5;
  }
  & img {
    height: 200px;
    margin-right: 10px;
    padding: 10px;
  }
  & div {
    color: rgba(0, 0, 0, 0.7);
    padding-bottom: 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  & span {
    line-height: 20px;
    color: rgba(0, 0, 0, 0.6);
    padding-right: 40px;
    padding-left: 15px;
    overflow: hidden;
  }
  & goodsname {
    font-size: 30px;
    font-weight: 800;
    max-width: inherit;
    color: rgba(0, 0, 0, 0.7);
  }
`;
