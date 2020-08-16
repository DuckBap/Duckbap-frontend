import styled from 'styled-components';

export const IdolLists = styled.div`
  display: flex;
  flex-direction: column;

  .idol-list-item {
    width: 100%;
    display: flex;
    font-weight: 400;
    font-size: 22px;
    align-items: center;
    padding: 4px 0;
  }

  .idol-img {
    border-radius: 100%;
    width: 40px;
    height: 40px;
    margin-right: 8px;
  }
`;
