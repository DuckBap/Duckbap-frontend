import React from 'react';
import {
  SlideImgWrapper,
  SlideImg,
  SlideImgText,
  SlideImgLeft,
  SlideImgRight,
} from './slide.style';

//위 두 개는 혹시나 투명한 div를 넣으면 괜찮아질까 해서 넣어봄.
//결론적으로 이상함.

const Slide = ({ imgSrc, name }) => {
  return (
    <SlideImgWrapper>
      <SlideImgText>{name}</SlideImgText>
      <SlideImgLeft />
      <SlideImg src={imgSrc} title={name} alt={name} />
      <SlideImgRight />
    </SlideImgWrapper>
  );
};

export default Slide;
