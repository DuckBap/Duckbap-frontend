import styled from 'styled-components';

export const SliderWrapper = styled.div`
  overflow: hidden;
  display: block;
  width: 100%;
  display: inline-block;
  height: auto;
`;

export const SlideImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const SlideImg = styled.img`
  width: 100%;
  height: 60vh;
  max-width: 100%;
`;

export const SlideImgText = styled.div`
  position: absolute;
  left: 12vw;
  bottom: 20vh;
  color: white;
  font-size: 50px;
  max-width: 25vw;
  font-weight: 400;
  word-break: keep-all;
`;

export const SlideImgLeft = styled.div`
  position: absolute;
  width: 0%;
  top: 0px;
  left: 0px;
  bottom: 0px;
  background: white;
  opacity: 0.5;
`;

export const SlideImgRight = styled.div`
  position: absolute;
  width: 0%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  background: white;
  opacity: 0.5;
`;
