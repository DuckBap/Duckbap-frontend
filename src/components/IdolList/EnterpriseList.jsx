import React from 'react';
import EnterListItem from './EnterListItem';
import { EnterpriseLists, EnterpriseListHeader } from './style-enterpriseList.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

export default function EnterpriseList() {
  let listOf10 = [
    { name: 'SM Entertainment', imgUrl: 'sm.png' },
    { name: 'JYP Enterteinment', imgUrl: 'sm.png' },
    { name: 'CJ ENM', imgUrl: 'sm.png' },
    { name: 'KAKAO M', imgUrl: 'sm.png' },
    { name: 'Big Hit Enterteinment', imgUrl: 'sm.png' },
    { name: 'DSP Media', imgUrl: 'sm.png' },
    { name: 'adobe emdia', imgUrl: 'sm.png' },
    { name: 'coca cola entertainment', imgUrl: 'sm.png' },
    { name: 'toto Entertainment', imgUrl: 'sm.png' },
    { name: 'bobo Entertainment', imgUrl: 'sm.png' },
  ];
  return (
    <>
      <EnterpriseListHeader>
        <span>프로젝트 둘러보기</span>
        <FontAwesomeIcon className="enterprise-list-header-icon" icon={faWindowClose} />
      </EnterpriseListHeader>
      <EnterpriseLists>
        <span>카테고리</span>
        {listOf10.map((enterprise) => {
          return <EnterListItem key={enterprise.name} enterprise={enterprise} />;
        })}
        <EnterListItem enterprise={{ name: '기타', imgUrl: null }} />
      </EnterpriseLists>
    </>
  );
}
