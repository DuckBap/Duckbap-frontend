import React, {useRef, useEffect, useState} from "react";
import axios from "axios";
//import styled from 'styled-components';
import { Goods,GoodsImgWrapper, GoodsImg, Item, TwoItems, GoodsContentWrapper } from './style-itemlist';
import { withRouter } from "react-router-dom";


/*
function useFetch(url) {
  const [data, setData] = useState([]);
  async function fetchUrl() {
    await axios.get(url).then(response => {
     setData(response.data.data);
    });
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data];
}*/

function useHover() {
    const ref = useRef();
    const handleMouseOver = () => {
        const { current } = ref;
        current.style.transform = `scale(1.1)`;
        current.style.transition = "all 0.5s";
        current.style.cursor = 'pointer';
    };
    const handleMouseOut = () => {
        const { current } = ref;
        current.style.transform = `scale(1)`;
        current.style.transition = "all 0.5s";
    };

    useEffect(() => {
        const node = ref.current;
        if (node) {
          node.addEventListener('mouseover', handleMouseOver);
          node.addEventListener('mouseout', handleMouseOut);

          return () => {
            node.removeEventListener('mouseover', handleMouseOver);
            node.removeEventListener('mouseout', handleMouseOut);
          };
        }
      }, (ref.current)
    );

    return { ref};
  }


// const MainItemList = ( {item, isLoading} ) => {
const MainItemList = ( { isLoading, history } ) => {

    const item = [
        {
          id: 0,
          userName: "반지수",
          name: "6년 동안의 풍경 그림 작업을 담은 <산책길 위에서>",
          dDay: -1,
          achievementRate: 98,
          mainImgUrl:
            "http://img.khan.co.kr/news/2019/11/29/l_2019112901003607500286631.jpg",
        },
        {
          id: 1,
          userName: "최강훈",
          name: "백제의 아름다움을 담은 키링 : 능선사이 & 연꽃위로",
          dDay: -2,
          achievementRate: 32,
          mainImgUrl:
            "https://res.cloudinary.com/css-tricks/image/fetch/w_600,q_auto,f_auto/https://cdn4.buysellads.net/uu/7/65221/1591028064-MC_CSSTricks_Logo_600x600.jpg",
        },
        {
            id: 2,
        userName: "최강훈",
        name: "화상경험자 디자이너가 전하는 우리 모두의 오롯함, 버디 백",
        dDay: -3,
        achievementRate: 32,
        mainImgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/American_Eskimo_Dog.jpg/1527px-American_Eskimo_Dog.jpg",
        },        {
            id: 2,
        userName: "최강훈",
        name: "화상경험자 디자이너가 전하는 우리 모두의 오롯함, 버디 백",
        dDay: -3,
        achievementRate: 32,
        mainImgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/American_Eskimo_Dog.jpg/1527px-American_Eskimo_Dog.jpg",
        },
        {
            id: 3,
            userName: "최강훈",
            name: "HAPPY MENTAL 언니의 해피 쏭 러브 포엠 낭독극",
            dDay: -4,
            achievementRate: 32,
            mainImgUrl:
              "https://img.lovepik.com/original_origin_pic/18/04/12/62d08b0e07749561f0e564beae0e8b33.png_wh300.png!/both/154x106",
        },
        {
            id: 4,
            userName: "최강훈",
            name: "작은 신선한 동물 손으로 그린 ​​귀여운 곰",
            dDay: -5,
            achievementRate: 32,
            mainImgUrl:
              "http://img.khan.co.kr/news/2020/08/09/l_2020080901000887600068091.jpg",
        },
        {
            id: 5,
            userName: "최강훈",
            name: "HAPPY MENTAL 언니의 해피 쏭 러브 포엠 낭독극",
            dDay: -4,
            achievementRate: 32,
            mainImgUrl:
              "https://img.lovepik.com/original_origin_pic/18/04/12/62d08b0e07749561f0e564beae0e8b33.png_wh300.png!/both/154x106",
        },
        {
            id: 6,
            userName: "최강훈",
            name: "HAPPY MENTAL 언니의 해피 쏭 러브 포엠 낭독극",
            dDay: -4,
            achievementRate: 32,
            mainImgUrl:
              "https://img.lovepik.com/original_origin_pic/18/04/12/62d08b0e07749561f0e564beae0e8b33.png_wh300.png!/both/154x106",
        },
        {
            id: 7,
            userName: "최강훈",
            name: "HAPPY MENTAL 언니의 해피 쏭 러브 포엠 낭독극",
            dDay: -4,
            achievementRate: 32,
            mainImgUrl:
              "https://img.lovepik.com/original_origin_pic/18/04/12/62d08b0e07749561f0e564beae0e8b33.png_wh300.png!/both/154x106",
        },
    ];


    const Hover = useHover();

  const goToProductDetail = () => {
    history.push('/product')
  }


    //  const template = jsonData.map((item, index) => (
  if (item)
    return (
      <Goods onClick={goToProductDetail}>
          <GoodsImgWrapper>
              <GoodsImg {...Hover} src={item.mainImgUrl || 'iu.jpeg'} alt={item.name || 'no alt'} title={item.name || 'no title'} />
          </GoodsImgWrapper>
          {
            isLoading ?
            ( <GoodsContentWrapper /> )
            : (
              <GoodsContentWrapper >
                <TwoItems>
                    <Item className="userName">{item.userName || 'no username'} | &nbsp;</Item>
                    <Item className="dDay">{item.dDay * -1 || 'no dDay'} 일 남음</Item>
                </TwoItems>
                <Item className="name">{item.name || 'no name'}</Item>
                <Item className="achievementRate">{item.achievementRate || '999'}% 달성</Item>
              </GoodsContentWrapper>
            )
          }
      </Goods>
    )
    return(<Goods />);
//  return template;*/
}

export default withRouter(MainItemList);



