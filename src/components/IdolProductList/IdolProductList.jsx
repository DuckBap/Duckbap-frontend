import React from 'react';
import IdolProductItem from './IdolProductItem';
import { IdolProductLists } from './style-idolProductList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
// 무한스크롤? 페이지네이션?
export default function IdolProductList() {
  let items = [
    {
      id: 1,
      sellerName: 'seller1',
      fundingName: '매일 변화하는 아이유의 위상을 담은 미니일력, 아이유 증명사진',
      mainImgUrl: 'iu.jpeg',
      description: '매일 변화하는 달의 위상을 확인할 수 있는 2021년도 미니일력 아 드망입니다',
      dDay: 2,
      achievementRate: 1520,
    },
    {
      id: 2,
      sellerName: 'seller2',
      fundingName: '[젤리도넛] 사랑스런 아이유 랜덤 피규어 - Vol.1',
      description:
        '완벽하진 않아도 사랑받을수 있어요~ 사랑스런 고양이 나비씨의 첫번째 피규어를 함께해주세요',
      mainImgUrl: 'iu.jpeg',
      dDay: 10,
      achievementRate: 1020,
    },
    {
      id: 2,
      sellerName: 'seller2',
      fundingName: '[젤리도넛] 사랑스런 아이유 랜덤 피규어 - Vol.1',
      description:
        '완벽하진 않아도 사랑받을수 있어요~ 사랑스런 고양이 나비씨의 첫번째 피규어를 함께해주세요',
      mainImgUrl: 'iu.jpeg',
      dDay: 10,
      achievementRate: 1020,
    },
    {
      id: 2,
      sellerName: 'seller2',
      fundingName: '[젤리도넛] 사랑스런 아이유 랜덤 피규어 - Vol.1',
      description:
        '완벽하진 않아도 사랑받을수 있어요~ 사랑스런 고양이 나비씨의 첫번째 피규어를 함께해주세요',
      mainImgUrl: 'iu.jpeg',
      dDay: 10,
      achievementRate: 1020,
    },
    {
      id: 2,
      sellerName: 'seller2',
      fundingName: '[젤리도넛] 사랑스런 아이유 랜덤 피규어 - Vol.1',
      description:
        '완벽하진 않아도 사랑받을수 있어요~ 사랑스런 고양이 나비씨의 첫번째 피규어를 함께해주세요',
      mainImgUrl: 'iu.jpeg',
      dDay: 10,
      achievementRate: 1020,
    },
    {
      id: 2,
      sellerName: 'seller2',
      fundingName: '[젤리도넛] 사랑스런 아이유 랜덤 피규어 - Vol.1',
      description:
        '완벽하진 않아도 사랑받을수 있어요~ 사랑스런 고양이 나비씨의 첫번째 피규어를 함께해주세요',
      mainImgUrl: 'iu.jpeg',
      dDay: 10,
      achievementRate: 1020,
    },
  ];

  return (
    <IdolProductLists>
      <div className="sort-btn-container">
        <span className="sort-btn">
          인기순 <FontAwesomeIcon icon={faSortDown} />
        </span>
      </div>
      {items.map((item) => (
        <IdolProductItem key={item.id} item={item} />
      ))}
    </IdolProductLists>
  );
}
