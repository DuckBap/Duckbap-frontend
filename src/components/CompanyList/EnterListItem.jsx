import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import IdolList from './IdolList';
import { EnterListItems } from './common.style';

export default function EnterListItem({ enterprise, setOpen, others }) {
  const [isListOpen, setListOpen] = useState(false);

  return (
    <>
      <EnterListItems onClick={() => setListOpen((isListOpen) => !isListOpen)}>
        <span>{enterprise.name} </span>
        {isListOpen && <FontAwesomeIcon className="sort-up-btn" icon={faSortUp} />}
        {!isListOpen && <FontAwesomeIcon className="sort-down-btn" icon={faSortDown} />}
      </EnterListItems>
      {isListOpen && !others && <IdolList entId={enterprise.entId} setOpen={setOpen} />}
      {isListOpen &&
        others &&
        others.map((enterprise) => {
          return <EnterListItem key={enterprise.name} enterprise={enterprise} setOpen={setOpen} />;
        })}
      {}
    </>
  );
}
