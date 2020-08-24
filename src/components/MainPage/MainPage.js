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
  const [dataNum, setdataNum] = useState(0);
  const [pagenum, setPageNum] = useState(0);
  const [isLoading, setisLoading] = useState(true);
  const arrayForHoldingPosts = [];
  const elem = useRef();
  
  async function fetchUrl(pagenum) {
    await axios.get(`https://prefab-imagery-286323.uc.r.appspot.com/v1/fundings/main?page=${pagenum}`/*`https://jsonplaceholder.typicode.com/comments?postId=${pagenum}`*/).then(response => {
      const arrayForHoldingPosts=[...jsonData, ...response.data];
      setdataNum(Object.keys(response.data).length)
      setjsonData(arrayForHoldingPosts);
      } 
    );
    setisLoading(false);
  };
  
    useEffect(() => {
      fetchUrl(pagenum);
      console.log(pagenum);
      console.log(jsonData);
      console.log(dataNum);
      if (pagenum > 1 && dataNum < 8)
      {
        const { current } = elem;
        current.style.display = 'none';
      }
    }, [pagenum]);

    useEffect(() => {
      fetchUrl(1);
    }, []);

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
         {
          jsonData.map((item) => (
            <MainItemList item={item} isLoading={isLoading} />
          ))
        }
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
