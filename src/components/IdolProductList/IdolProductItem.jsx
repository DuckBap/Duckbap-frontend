import React from 'react';
import { IdolProductItems } from './style-idolProductItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

export default function IdolProductItem({ item }) {
  return (
    <IdolProductItems>
      <div className="product-img-container">
        <img className="product-img" src={item.mainImgUrl} alt={item.fundingName} />
      </div>
      <div className="text-container">
        <div className="funding-header">
          <span className="funding-name">{item.fundingName}</span>
          <span className="seller-name">{item.sellerName}</span>
        </div>
        <div className="horizontal-line" />
        <span className="description">{item.description}</span>
        <div className="achievement-rate-bar">
          <div className="foreground"></div>
          <div className="background"></div>
        </div>
        <div className="funding-status">
          <span className="achievement-rate">
            달성율 <span className="achievement-rate-value">{item.achievementRate}%</span>
          </span>
          <span className="d-day">
            <FontAwesomeIcon icon={faClock} />
            <span>{item.dDay}일 남음</span>
          </span>
        </div>
      </div>
    </IdolProductItems>
  );
}
