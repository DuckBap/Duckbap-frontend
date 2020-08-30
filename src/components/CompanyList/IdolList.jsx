import React, { useState, useEffect } from 'react';
import { IdolLists } from './common.style';
import { withRouter } from 'react-router-dom';

function IdolList({ setOpen, history, entId }) {
  const [idolList, setidolList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(
        `https://prefab-imagery-286323.uc.r.appspot.com/v1/artists?ent-id=${entId}`
      );
      res = await res.json();
      setidolList(res.data);
    };
    fetchData();
  }, [entId]);

  const goToProductList = (artistId) => {
    setOpen(false);
    history.push(`/fundings/${artistId}`);
  };

  return (
    <IdolLists>
      {idolList.map((idol) => {
        return (
          <div
            className="idol-list-item"
            key={idol.artistId}
            onClick={() => goToProductList(idol.artistId)}
          >
            {/* <img className="idol-img" src={idol.artistImgUrl} alt={idol.name} /> */}
            <span> {idol.artistName}</span>
          </div>
        );
      })}
    </IdolLists>
  );
}

export default withRouter(IdolList);
