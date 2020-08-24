import Slide from './Slide';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SlideShow.css'; // 이걸 해주는 이유는 슬라이드 쇼 버튼이 안 보여서.
import React from 'react';
import styled from 'styled-components';
import { SliderWrapper } from './style-slide';
import { withRouter, Link } from 'react-router-dom';

const SlideShow = ({ history }) => {
  const sampleData = [
    {
      imgSrc: 'https://best-wallpaper.net/wallpaper/m/1611/Doll-toy-girl-hat_m.webp',
      name: '나만의 DIL 인형',
    },
    {
      imgSrc:
        'https://previews.123rf.com/images/milkos/milkos1810/milkos181000795/110883591-healthy-food-panorama-background-.jpg',
      name: 'Well-being again! 건강한 음식',
    },
    {
      imgSrc:
        'https://p1.pxfuel.com/preview/88/831/620/white-lion-lion-lion-babies-mother-lion-black-and-white-panorama.jpg',
      name: '갈 곳을 잃어가는 사자 무리들',
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
