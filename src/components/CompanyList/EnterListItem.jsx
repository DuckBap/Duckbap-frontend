import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import IdolList from './IdolList';
import { EnterListItems } from './common.style';

export default function EnterListItem({ enterprise, setOpen }) {
  const [isListOpen, setListOpen] = useState(false);

  return (
    <>
      <EnterListItems onClick={() => setListOpen((isListOpen) => !isListOpen)}>
        {/* {enterprise.imgUrl && (
				<img className="enter-logo" src={enterprise.imgUrl} alt={enterprise.name} />
			)} */}
        <span>{enterprise.name} </span>
        {isListOpen && <FontAwesomeIcon className="sort-up-btn" icon={faSortUp} />}
        {!isListOpen && <FontAwesomeIcon className="sort-down-btn" icon={faSortDown} />}
      </EnterListItems>
      {isListOpen && <IdolList setOpen={setOpen} />}
    </>
  );
}
