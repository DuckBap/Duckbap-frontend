import React from "react";
import SlideShow from "./SlideShow";
import MainItemList from "./MainItemList";
import styled from 'styled-components';


function MainPage() {
//  <body style="margin: 0 0 0 0">

  const GoodsColumns = styled.div`
    
    max-width: 1200px;
    margin:0 auto;
    padding:0;

    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-self: auto;

  }
  `
//flex-direction + flex-wrap: 두 줄에 나타나게.

  const Header = styled.div`
  
    min-height:15vh;
    font-size:250%;
    width:100%;
    background-color:white;
    display:inline-block;
    text-align:center;
    font-family:cursive;
    `

  
  const Root = styled.div`
  
  `

  const SortBy = styled.div`
    min-height: 10vh;
    font-size: 200%;
    line-height: 10vh;
    font-weight: 800;
    max-width: 1200px;
    margin: 0 auto;
    display:flex;
    
  `

  const LoadMore = styled.button`
  box-shadow:inset 0px -9px 0px -6px #f0b282;
  background-color:#ffcb9e;
  border-radius:25px;
  border:1px solid #ffffff;
  padding:13px 61px;
  margin: 0 auto;
  display:block;
  cursor:pointer;
  
  color:#ffffff;
  font-size:15px;
  
  `
          
  //line-height는 세로 중앙 정렬임.
  //margin: 0 auto는 div를 화면 중앙으로.

    return (
      <Root>
        <Header>This is Header</Header>
        <SlideShow />
        <SortBy>주목할 만한 프로젝트</SortBy>
        <GoodsColumns>
          <MainItemList/>
        </GoodsColumns>
        <LoadMore>더 많은 굿즈 보기</LoadMore><br/>

        <div style={{textAlign:'center', marginTop:'10%'}}>
          <a href="#">top</a>
        </div>
      </Root>
    )
}

export default MainPage;