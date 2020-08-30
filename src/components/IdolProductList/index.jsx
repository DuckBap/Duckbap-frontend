import React, { useEffect, useState } from 'react';
import IdolProductItem from './IdolProductItem';
import { IdolProductLists } from './index.style';
import { useParams } from 'react-router-dom';

function IdolProductList() {
  const [items, setItems] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(
        `https://prefab-imagery-286323.uc.r.appspot.com/v1/fundings?artist-id=${id}`
      );
      res = await res.json();
      setItems(res.data);
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
