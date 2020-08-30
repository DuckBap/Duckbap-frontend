import React, { useEffect, useState } from 'react';
import EnterListItem from './EnterListItem';
import { EnterpriseLists, EnterpriseListHeader, IdolListWrapper } from './common.style';
import { withRouter } from 'react-router-dom';

function EnterList({ history, setOpen }) {
  const [listOf10, setlistOf10] = useState([]);
  const [others, setothers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch('https://prefab-imagery-286323.uc.r.appspot.com/v1/ents');
      res = await res.json();
      setlistOf10(res.data.slice(0, 10));
      setothers(res.data.slice(10));
    };
    fetchData();
  }, []);

  return (
    <>
      <IdolListWrapper>
        <EnterpriseListHeader>
          <span>프로젝트 둘러보기</span>
        </EnterpriseListHeader>
        <EnterpriseLists>
          <span>카테고리</span>
          {listOf10.map((enterprise) => {
            return (
              <EnterListItem key={enterprise.name} enterprise={enterprise} setOpen={setOpen} />
            );
          })}
          <EnterListItem
            enterprise={{ name: '기타', imgUrl: null }}
            others={others}
            setOpen={setOpen}
          />
        </EnterpriseLists>
        <div style={{ width: '100%', height: '200px' }} />
      </IdolListWrapper>
    </>
  );
}

export default withRouter(EnterList);
