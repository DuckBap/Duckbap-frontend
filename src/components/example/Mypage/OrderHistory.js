import React from "react";
import PropTypes from "prop-types";
import {
  OrderHistoryContainer,
  OrderHistoryTitle,
} from "./OrderHistory.styles";
import OrderHistoryItem from "./OrderHistoryItem";

const OrderHistory = ({ isSell }) => {
  const orders = [
    {
      img: "goods.jpeg",
      title: "123",
      content:
        "이성은 놀이 청춘의 착목한는 대고, 얼음에 이상을 예수는 아니한 부패뿐이다. 밥을 살 되려니와, 생명을 있으랴? 방황하여도, 장식하는 그들에게 소금이라 청춘을 그들의 것이다. 일월과 희망의 되려니와, 따뜻한 열락의 황금시대를 아름다우냐? 든 피가 만천하의 것이다. 일월과 보배를 능히 사막이다. 든 무한한 꽃 수 웅대한 가진 아니다. 이는 몸이 바로 대중을 풍부하게 얼음에 위하여서. 우리 그들을 어디 있다. 이는 따뜻한 기관과 온갖 맺어, 힘있다.",
    },
    {
      img: "goods.jpeg",
      title: "123",
      content:
        "이성은 놀이 청춘의 착목한는 대고, 얼음에 이상을 예수는 아니한 부패뿐이다. 밥을 살 되려니와, 생명을 있으랴? 방황하여도, 장식하는 그들에게 소금이라 청춘을 그들의 것이다. 일월과 희망의 되려니와, 따뜻한 열락의 황금시대를 아름다우냐? 든 피가 만천하의 것이다. 일월과 보배를 능히 사막이다. 든 무한한 꽃 수 웅대한 가진 아니다. 이는 몸이 바로 대중을 풍부하게 얼음에 위하여서. 우리 그들을 어디 있다. 이는 따뜻한 기관과 온갖 맺어, 힘있다.",
    },
    {
      img: "goods.jpeg",
      title: "123",
      content:
        "이성은 놀이 청춘의 착목한는 대고, 얼음에 이상을 예수는 아니한 부패뿐이다. 밥을 살 되려니와, 생명을 있으랴? 방황하여도, 장식하는 그들에게 소금이라 청춘을 그들의 것이다. 일월과 희망의 되려니와, 따뜻한 열락의 황금시대를 아름다우냐? 든 피가 만천하의 것이다. 일월과 보배를 능히 사막이다. 든 무한한 꽃 수 웅대한 가진 아니다. 이는 몸이 바로 대중을 풍부하게 얼음에 위하여서. 우리 그들을 어디 있다. 이는 따뜻한 기관과 온갖 맺어, 힘있다.",
    },
  ];
  return (
    <OrderHistoryContainer>
      <OrderHistoryTitle>{isSell ? "판매내역" : "구매내역"}</OrderHistoryTitle>
      {orders.map((order, index) => {
        return <OrderHistoryItem key={index} {...order} />;
      })}
    </OrderHistoryContainer>
  );
};

OrderHistory.defaultProps = {
  isSell: true,
};

OrderHistory.prototype = {
  isSell: PropTypes.bool.isRequired,
};

export default OrderHistory;
