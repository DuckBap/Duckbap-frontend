import React from "react";
import Proptypes from "prop-types";
import { OrderHistoryCard } from "./OrderHistoryItem.styles";

const OrderHistoryItem = ({ img, title, content }) => {
  return (
    <OrderHistoryCard>
      <img src={img} alt="goods" />
      <div>
        <h3>{title}</h3>
        <span>{content}</span>
      </div>
    </OrderHistoryCard>
  );
};

OrderHistoryItem.prototypes = {
  img: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  content: Proptypes.string.isRequired,
};

export default OrderHistoryItem;
