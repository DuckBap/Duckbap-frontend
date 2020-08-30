import React, { useEffect, useState } from 'react';
import IdolProductItem from './IdolProductItem';
import { IdolProductLists } from './index.style';
import { useParams } from 'react-router-dom';

const dummy = [
  {
    id: 1,
    sellerName: 'seller1',
    fundingName: '매일 변화하는 아이유의 위상을 담은 미니일력, 아이유 증명사진',
    mainImgUrl: 'detail-img.jpg',
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
    mainImgUrl: 'detail-img.jpg',
    dDay: 10,
    achievementRate: 1020,
  },
  {
    id: 6,
    sellerName: 'seller2',
    fundingName: '[젤리도넛] 사랑스런 아이유 랜덤 피규어 - Vol.1',
    description:
      '완벽하진 않아도 사랑받을수 있어요~ 사랑스런 고양이 나비씨의 첫번째 피규어를 함께해주세요',
    mainImgUrl: 'detail-img.jpg',
    dDay: 10,
    achievementRate: 1020,
  },
  {
    id: 3,
    sellerName: 'seller2',
    fundingName: '[젤리도넛] 사랑스런 아이유 랜덤 피규어 - Vol.1',
    description:
      '완벽하진 않아도 사랑받을수 있어요~ 사랑스런 고양이 나비씨의 첫번째 피규어를 함께해주세요',
    mainImgUrl: 'detail-img.jpg',
    dDay: 10,
    achievementRate: 1020,
  },
  {
    id: 4,
    sellerName: 'seller2',
    fundingName: '[젤리도넛] 사랑스런 아이유 랜덤 피규어 - Vol.1',
    description:
      '완벽하진 않아도 사랑받을수 있어요~ 사랑스런 고양이 나비씨의 첫번째 피규어를 함께해주세요',
    mainImgUrl: 'detail-img.jpg',
    dDay: 10,
    achievementRate: 1020,
  },
  {
    id: 5,
    sellerName: 'seller2',
    fundingName: '[젤리도넛] 사랑스런 아이유 랜덤 피규어 - Vol.1',
    description:
      '완벽하진 않아도 사랑받을수 있어요~ 사랑스런 고양이 나비씨의 첫번째 피규어를 함께해주세요',
    mainImgUrl: 'detail-img.jpg',
    dDay: 10,
    achievementRate: 1020,
  },
];

function IdolProductList() {
  const [items, setItems] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(
        `https://prefab-imagery-286323.uc.r.appspot.com/v1/fundings?artist-id=${id}`
      );
      res = await res.json();
      setItems(res.data.length ? res.data : dummy);
    };
    fetchData();
  }, [id]);

  return (
    <IdolProductLists>
      {items.map((item) => (
        <IdolProductItem key={item.id} item={item} />
      ))}
    </IdolProductLists>
  );
}

export default IdolProductList;
