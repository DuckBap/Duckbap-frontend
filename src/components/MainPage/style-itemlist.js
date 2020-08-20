
import styled from 'styled-components';

export const Goods = styled.div`    
text-align:center;
width: 23%;
display:inline;
margin-right: 2%;
min-height: 360px;
max-height:480px;
`

export const GoodsImgWrapper = styled.div`

width: 100%;
height: 50%;
max-width: 100%;
max-height: 50%;
overflow: hidden;
align: center;
display:inline-block;
`

 export const GoodsImg = styled.img`
height: 100%;
width: 100%;
max-height: 100%;
max-width: 100%;
border-radius:3%;
`

 export const Item = styled.span`

display: flex;
margin-top: 1%;
margin-bottom: 1%;

&.userName {
    color: rgba(0, 0, 0, 0.5);
    font-weight: 400;
    font-size: 14px;

}

&.dDay {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 400;
  font-size: 14px;
}

&.name {
    text-align: left;
    color: rgba(0,0,0,0.8);
    font-size: 20px;
    font-weight: 800;
    line-height: 28px;
    max-width: inherit;
    cursor: pointer;
    word-break:keep-all;
    

}

&.achievementRate {
    margin-top: 3%;
    color: #ffb61a;
    font-size: 22px;
    font-weight: 800;
    font-shadow: 0 0 2px rgba(0,0,0,0.2);
}
`

export const TwoItems = styled.div`
display: flex;
justify-content: flex-start;

`

export const GoodsContentWrapper = styled.div`
padding-top: 5%;
width: 100%;
max-width: 100%;
height: 50%;
display:inline-block;
`