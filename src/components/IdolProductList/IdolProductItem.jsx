import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import {
  IdolProductItems, ProductImgContainer, ProductImg,
  TextContainer, FundingHeader, Span, HorizontalLine,
  AchievementRateBar, FundingStatus
} from './style-idolProductItem';

export default function IdolProductItem({ item }) {
  return (
    <IdolProductItems>
      <ProductImgContainer>
        <ProductImg src={item.mainImgUrl} alt={item.fundingName} />
      </ProductImgContainer>
      <TextContainer>
        <FundingHeader>
          <Span className="funding-name">{item.fundingName}</Span>
          <Span className="seller-name">{item.sellerName}</Span>
        </FundingHeader>
        <HorizontalLine />
        <Span className="description">{item.description}</Span>
        <AchievementRateBar>
          <AchievementRateBar className="foreground" />
          <AchievementRateBar className="background" />
        </AchievementRateBar>
        <FundingStatus>
          <Span className="achievement-rate">
            달성율
            <Span className="achievement-rate-value">
              {item.achievementRate}
              %
            </Span>
          </Span>
          <Span className="d-day">
            <FontAwesomeIcon icon={faClock} />
            <Span>
              {item.dDay}
              일 남음
            </Span>
          </Span>
        </FundingStatus>
      </TextContainer>
    </IdolProductItems>
  );
}
