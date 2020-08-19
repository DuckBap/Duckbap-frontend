import React from 'react';
import SlideShow from './SlideShow';
import MainItemList from './MainItemList';
import styled from 'styled-components';
import { GoodsColumns, Root, Wrapper,SortBy, LoadMore } from './style-mainpage';

function MainPage() {
  //  <body style="margin: 0 0 0 0">

  /*
  return (
    <Root>
      <Header>This is Header</Header>
      <SlideShow />
      <SortBy>주목할 만한 프로젝트</SortBy>
      <GoodsColumns>
        <MainItemList />
      </GoodsColumns>
      <LoadMore>더 많은 굿즈 보기</LoadMore>
      <br />
      <SortBy>성공임박</SortBy>
      <GoodsColumns>
        <MainItemList />
      </GoodsColumns>
      <div style={{ textAlign: 'center', marginTop: '10%' }}>
        <a href="#"></a>
      </div>
    </Root>
  );*/

  return (
    <Root>
      <SlideShow />
      <Wrapper>
        <SortBy>주목할 만한 프로젝트</SortBy>
        <GoodsColumns>
          <MainItemList />
        </GoodsColumns>
        <LoadMore>더 많은 굿즈 보기</LoadMore>
        <br />
        <SortBy>성공임박</SortBy>
        <GoodsColumns>
          <MainItemList />
        </GoodsColumns>
        <div style={{ textAlign: 'center', marginTop: '10%' }}>
          <a href="#"></a>
        </div>
      </Wrapper>
    </Root>
  );
}

export default MainPage;
