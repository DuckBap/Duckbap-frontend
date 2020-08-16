import styled from 'styled-components';
import EnterListItem from './EnterListItem';

export const EnterListItems = styled.div`
  font-size: 25px;
  font-weight: 700;
  cursor: pointer;
  padding: 5px 0;
  box-sizing: border-box;

  .enter-logo {
    width: 30px;
    height: 30px;
  }

  & > .sort-up-btn {
    color: grey;
    font-size: 18px;
  }

  & > .sort-down-btn {
    color: grey;
    padding-bottom: 4px;
    font-size: 18px;
  }
`;
