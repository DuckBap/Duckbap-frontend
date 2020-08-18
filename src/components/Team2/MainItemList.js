import React, {useRef, useEffect, useState} from "react";
import styled from 'styled-components';
import axios from "axios";

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


  function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    async function fetchUrl() {
      await axios.get(url).then(response => {
       setData(response.data.data);
      });
    }
    useEffect(() => {
      fetchUrl();
    }, []);
    return [data, loading];
  }

const MainItemListEven = () => {
    
    const jsonData = [
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
            id: 3,
            userName: "최강훈",
            name: "HAPPY MENTAL 언니의 해피 쏭 러브 포엠 낭독극",
            dDay: -4,
            achievementRate: 32,
            mainImgUrl:
              "https://img.lovepik.com/original_origin_pic/18/04/12/62d08b0e07749561f0e564beae0e8b33.png_wh300.png!/both/154x106",
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
            id: 3,
            userName: "최강훈",
            name: "HAPPY MENTAL 언니의 해피 쏭 러브 포엠 낭독극",
            dDay: -4,
            achievementRate: 32,
            mainImgUrl:
              "https://img.lovepik.com/original_origin_pic/18/04/12/62d08b0e07749561f0e564beae0e8b33.png_wh300.png!/both/154x106",
        },
    ];

/*


    
    const [movies, setmovies] = useState();
    const getMovies = async () => {
    
        var temp = await axios.get(
        "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
        );
        setmovies(temp);
        console.log(movies);

    };
    getMovies();
    // list-style-type 은 ul태그의 점을 관리.
*/
const [data, loading] = useFetch(
    "https://yts-proxy.now.sh/list_movies.json"
  );

  useEffect(
    () => {
      console.log(data);
    },
    [data]
  );/*


    const ajaxJson = async () => {
     var oReq = new XMLHttpRequest();
      await oReq.open("GET", "https://yts-proxy.now.sh/list_movies.json");
      oReq.addEventListener("load", function(){

      })
      oReq.send();
    } */
    const Goods = styled.div`    
    text-align:center;
    width: 23%;
    display:inline;
    margin-left:2%;
    min-height: 40vh
    max-height:40vh
`

     const GoodsImgWrapper = styled.div`

    width: 100%;
    height: 50%;
    max-width: 100%;
    max-height: 50%;
    overflow: hidden;
    align: center;
    display:inline-block;
`

     const GoodsImg = styled.img`
    height: 100%;
    width: 100%;
    max-height: 100%;
    max-width: 100%;
    border-radius:3%;
`

     const Item = styled.span`

    display: flex;
    margin-top: 1%;
    margin-bottom: 1%;

    &.userName {
        color: gray;
        font-size: 80%;

    }

    &.dDay {
        color:gray;
        font-size: 80%;
    }

    &.name {
        text-align: left;
        color: black;
        font-size: 120%;
        max-width: inherit;
        cursor: pointer;

    }


    &.achievementRate {
        margin-top:5%;
        color: red;

    }
`

 const TwoItems = styled.div`
    display: flex;
    justify-content: flex-start;
    
`

 const GoodsContentWrapper = styled.div`
    padding-top: 5%;
    width: 100%;
    max-width: 100%;
    height: 50%;
    display:inline-block;
`



    const Hover = useHover();
    const template = jsonData.map((item, index) => (
    <Goods> 
        <GoodsImgWrapper>
            <GoodsImg {...Hover} src={item.mainImgUrl} alt={item.name} title={item.name} />
        </GoodsImgWrapper>
        <GoodsContentWrapper>
            <TwoItems>
                <Item className="userName">{item.userName} | &nbsp;</Item>
                <Item className="dDay">{item.dDay * -1} 일 남음</Item>
            </TwoItems>
            <Item className="name">{item.name}</Item>
            <Item className="achievementRate">{item.achievementRate}% 달성</Item>
        </GoodsContentWrapper>
    </Goods>
    ));

    return template;
}

export default MainItemListEven;


