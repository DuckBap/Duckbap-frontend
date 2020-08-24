import styled from 'styled-components';

export const IdolListWrapper = styled.div`
	width: 100%;
	//display: flex;
	//align-items: center;
	//justify-contents: center;
	flex-flow: column;
	@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');
    font-family: 'Nanum Gothic', 'sans-serif' !important;
`;

export const EnterpriseLists = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 12px;
  margin: 12px;

  & > span {
    display: inline-block;
    font-size: 17px;
    font-weight: 650;
    color: rgb(191, 191, 191);
    padding: 20px;
  }
`;

export const EnterpriseListHeader = styled.div`
	width: 100%;  
	justify-content: center;
  	min-height: 9vh;
  	max-height: 15vh;
  	align-items: center;
	display: flex;
	border-bottom: 1px solid rgb(191, 191, 191);	
  	font-size: 14px;
  	font-weight: 600;
  	display: flex;
  	justify-content: center;
  	align-items: center;
 	.span {
  		width: 100%;
  		background-color: white;
  		padding: 20px 0;
 	}
	.enterprise-list-header-icon {
    	position: absolute;
    	right: 20px;
    	cursor: pointer;
  	}
`;

export const EnterListItems = styled.div`
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  padding: 9px 20px;
  box-sizing: border-box;

  .enter-logo {
    width: 30px;
    height: 30px;
  }

  & > .sort-up-btn {
    color: #ccc;
	font-size: 17px;
	// 업 버튼이 위로 올라가는데 정렬이 잘 안 되네요ㅠ
	//padding-left: 5px;
    //padding-top: 6px;
  }

  & > .sort-down-btn {
	color: grey;
	//padding-left: 5px;
    //padding-bottom: 2px;
    font-size: 17px;
  }
`;

export const IdolLists = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  .idol-list-item {
    width: 100%;
    display: flex;
    font-weight: 400;
    font-size: 18px;
    align-items: center;
    padding: 10px 0;
  }

  .idol-img {
    border-radius: 100%;
    width: 40px;
    height: 40px;
    margin-right: 8px;
  }
`;

