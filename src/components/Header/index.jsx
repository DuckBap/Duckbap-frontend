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
          src="logo.png"
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
