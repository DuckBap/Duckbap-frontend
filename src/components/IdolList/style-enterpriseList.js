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
