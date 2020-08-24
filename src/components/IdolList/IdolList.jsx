import React from 'react';
import { IdolLists } from './style';
import { withRouter } from 'react-router-dom';

function IdolList({ setOpen, history }) {
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

  const goToProductList = () => {
    setOpen(false);
    history.push('/productList');
  };

  return (
    <IdolLists>
      {idolList.map((idol) => {
        return (
          <div className="idol-list-item" onClick={() => goToProductList()}>
            <img className="idol-img" src={idol.imgUrl} alt={idol.name} />
            <span> {idol.name}</span>
          </div>
        );
      })}
    </IdolLists>
  );
}

export default withRouter(IdolList);
