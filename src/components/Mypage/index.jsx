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
      <div>
        아이콘 제작자{' '}
        <a href="https://www.flaticon.com/kr/authors/pixel-perfect" title="Pixel perfect">
          Pixel perfect
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/kr/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <div>
        아이콘 제작자{' '}
        <a href="https://www.flaticon.com/kr/authors/icongeek26" title="Icongeek26">
          Icongeek26
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/kr/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </MyPageContainer>
  );
};

export default Mypage;
