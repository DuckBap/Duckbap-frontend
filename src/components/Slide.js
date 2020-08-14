import React from "react"
import styled from 'styled-components';

const SlideImgWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position:relative;

`

const SlideImg = styled.img`
    width: 100%;
    height: 60vh;
    max-width: 100%;
    
`

const SlideImgText = styled.div`
    position:absolute;
    left: 12vw;
    bottom: 25vh;
    color: white;
    font-size: 400%;
    max-width:25vw;

`

const SlideImgLeft = styled.div`
position: absolute;
width: 0%;
top: 0px;
left: 0px;
bottom:0px;
background: white;
opacity: 0.5;
`


const SlideImgRight = styled.div`
position: absolute;
width: 0%;
top: 0px;
right: 0px;
bottom: 0px;
background: white;
opacity: 0.5;
`
//위 두 개는 혹시나 투명한 div를 넣으면 괜찮아질까 해서 넣어봄.
//결론적으로 이상함. 


const Slide = ({imgSrc, name}) => {
    return (
    <SlideImgWrapper>
        <SlideImgText>{name}</SlideImgText>
        <SlideImgLeft />
        <SlideImg src={imgSrc} title={name} alt={name} />
        <SlideImgRight />
    </SlideImgWrapper>
    )
}

export default Slide;