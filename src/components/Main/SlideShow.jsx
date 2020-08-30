import Slide from './Slide';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SlideShow.style.css'; // 이걸 해주는 이유는 슬라이드 쇼 버튼이 안 보여서.
import React from 'react';
import styled from 'styled-components';
import { SliderWrapper } from './slide.style';
import { withRouter, Link } from 'react-router-dom';

const SlideShow = ({ history }) => {
  const sampleData = [
    {
      imgSrc: 'noImg.png',
      name: 'no data',
    },
    {
      imgSrc: 'noImg.png',
      name: 'no data',
    },
    {
      imgSrc: 'noImg.png',
      name: 'no data',
    },
  ];

  const settings = {
    dots: true,
    color: 'white',
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          height: '50px',
          backgroundColor: 'rgba(0,0,0,0)',
          padding: '2vh',
          opacity: '100%',
        }}
      >
        <ul style={{ margin: '0px' }}>{dots} </ul>
      </div>
    ),
  };

  const goToProductDetail = () => {
    history.push('/product');
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        {sampleData.map((data) => {
          return (
            <Link to={'/product'}>
              <Slide imgSrc={data.imgSrc} name={data.name} onClick={() => goToProductDetail()} />
            </Link>
          );
        })}
      </Slider>
    </SliderWrapper>
  );
};

export default withRouter(SlideShow);
