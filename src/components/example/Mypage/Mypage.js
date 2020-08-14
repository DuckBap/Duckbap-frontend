import React from 'react';
import { MyPageContainer } from './Mypage.styles';
import Profile from './Profile';
import OrderHistory from './OrderHistory';

const Mypage = () => {
  return (
    <MyPageContainer>
      <Profile />
      <OrderHistory isSell />
      <OrderHistory isSell={false} />
    </MyPageContainer>
  );
};

export default Mypage;
