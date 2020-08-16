import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import IdolList from './IdolList';
import { EnterListItems } from './style-enterListItem.js';

export default function EnterListItem({ enterprise }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <EnterListItems onClick={() => setIsOpen((isOpen) => !isOpen)}>
      {/* {enterprise.imgUrl && (
				<img className="enter-logo" src={enterprise.imgUrl} alt={enterprise.name} />
			)} */}
      <span>{enterprise.name} </span>
      {isOpen && <FontAwesomeIcon className="sort-up-btn" icon={faSortUp} />}
      {!isOpen && <FontAwesomeIcon className="sort-down-btn" icon={faSortDown} />}
      {isOpen && <IdolList />}
    </EnterListItems>
  );
}
