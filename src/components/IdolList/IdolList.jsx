import React from 'react';
import { IdolLists } from './style-idolList.js';

export default function IdolList() {
  let idolList = [
    { name: '아이유', imgUrl: 'iu.jpeg' },
    { name: '아이유', imgUrl: 'iu.jpeg' },
    { name: '아이유', imgUrl: 'iu.jpeg' },
    { name: '아이유', imgUrl: 'iu.jpeg' },
    { name: '아이유', imgUrl: 'iu.jpeg' },
    { name: '아이유', imgUrl: 'iu.jpeg' },
    { name: '아이유', imgUrl: 'iu.jpeg' },
    { name: '아이유', imgUrl: 'iu.jpeg' },
    { name: '아이유', imgUrl: 'iu.jpeg' },
    { name: '아이유', imgUrl: 'iu.jpeg' },
  ];
  return (
    <IdolLists>
      {idolList.map((idol) => {
        return (
          <div className="idol-list-item">
            <img className="idol-img" src={idol.imgUrl} alt={idol.name} />
            <span> {idol.name}</span>
          </div>
        );
      })}
    </IdolLists>
  );
}
