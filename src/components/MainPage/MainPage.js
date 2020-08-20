//import React from 'react';
import SlideShow from './SlideShow';
import MainItemList from './MainItemList';
import React, {useRef, useEffect, useState} from "react";
import axios from "axios";
//import styled from 'styled-components';
import { GoodsColumns, Root, Wrapper,SortBy, LoadMore } from './style-mainpage';
/*

const useLoadMore = (index) => {
  jsonData = useFetch(`fundings/main?page=${index}`);
}

function LoadMoreHandler(data) {
   if (Object.keys(data).length < 8)
    return {style: { opacity: 0 }};
}*/
function MainPage() {

  const [jsonData, setjsonData] = useState([]);
  const [pagenum, setPageNum] = useState(1);
  const elem = useRef();

  async function fetchUrl(pagenum) {
    await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${pagenum}`/*`fundings/main?page=${pagenum}`*/).then(response => {
      setjsonData(response.data);
    });}

    useEffect(() => {
      fetchUrl(pagenum);
      console.log(pagenum);
      console.log(jsonData);
      console.log(Object.keys(jsonData).length);
      if (pagenum > 1 && Object.keys(jsonData).length < 8)
      {
        const { current } = elem;
        current.style.display = 'none';
      }
    }, [pagenum]);
  
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
        <LoadMore ref={elem} onClick = {() => setPageNum(pagenum + 1)}>더 많은 굿즈 보기</LoadMore>
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
