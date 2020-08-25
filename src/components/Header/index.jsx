import React, { useState } from 'react';
import { Headerstyle, ToggleButton, Logostyle, SearchBtn, LoginBtn } from './index.style';
import { withRouter } from 'react-router-dom';

function Header({ history }) {
  const [open, setOpen] = useState(false);

  const goToMypage = () => {
    setOpen(false);
    history.push('/mypage');
    // history.push('/login')
  };

  const goToMain = () => {
    setOpen(false);
    history.push('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Headerstyle open={open}>
      <Logostyle>
        <img
          draggable="false"
          src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6f618edd-747e-43bc-a9cf-667c1bce61df%2Fduck.png?table=block&id=63f37a30-a74d-4979-8429-a95f8504750a&width=250&cache=v2"
          alt="duck"
          width="32px"
          onClick={goToMain}
        />
      </Logostyle>
      <ToggleButton open={open} setOpen={setOpen} />
      {/* <SearchBtn /> */}
      <LoginBtn onClick={goToMypage} />
    </Headerstyle>
  );
}

export default withRouter(Header);
