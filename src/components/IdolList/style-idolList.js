import styled from 'styled-components';

export const EnterpriseLists = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 12px;

  & > span {
    display: inline-block;
    font-size: 12px;
    font-weight: 600;
    color: rgb(191, 191, 191);
    padding: 20px 0;
  }
`;

export const EnterpriseListHeader = styled.div`
  justify-content: center;
  height: 58px;
  align-items: center;
  display: flex;
  width: 100%;
  border-bottom: 1px solid rgb(191, 191, 191);
  font-size: 12px;
  font-weight: 600;

  .enterprise-list-header-icon {
    position: absolute;
    right: 20px;
    cursor: pointer;
  }
`;

//엔터리스트아이템'즈'
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
