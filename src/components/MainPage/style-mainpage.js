
import styled from 'styled-components';

export const GoodsColumns = styled.div`
  max-width: 1200px;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-self: auto;
`;
//flex-direction + flex-wrap: 두 줄에 나타나게.
/*
export const Header = styled.div`
  min-height: 15vh;
  font-size: 250%;
  width: 100%;
  background-color: white;
  display: inline-block;
  text-align: center;
  font-family: cursive;
`;*/

export const Root = styled.div`
  display: flex;
  align-items: center;
  justify-contents: center;
  flex-flow: column;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
`;

export const SortBy = styled.div`
  min-height: 10vh;
  font-size: 200%;
  line-height: 10vh;
  font-weight: 800;
  max-width: 1200px;
  margin: 5px 0;
  display: flex;
`;

export const LoadMore = styled.button`
  //  box-shadow: inset 0px -9px 0px -6px #f0b282;
  background-color: #ffcf33;
  &:hover {
	background-color: #e6b000;
	box-shadow : 0 0 5px rgba(0,0,0,0.04);
  }
  border: 1px solid #ffffff;
  padding: 13px 61px;
  margin: 40px auto;
  margin-bottom: 100px;
  display: block;
  cursor: pointer;
  color: white;
  border-radius: 30px;
  font-weight: 700;
  font-size: 15px;
`;

//line-height는 세로 중앙 정렬임.
//margin: 0 auto는 div를 화면 중앙으로.