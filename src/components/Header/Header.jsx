import React from 'react';
//import { Link } from 'react-router-dom';
import { Headerstyle,
  ToggleButton,
  Logostyle,
  SearchBtn,
  LoginBtn,
 } from './style-header'

function Header() {
  return (
    <Headerstyle>
      <Logostyle>
        <img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6f618edd-747e-43bc-a9cf-667c1bce61df%2Fduck.png?table=block&id=63f37a30-a74d-4979-8429-a95f8504750a&width=250&cache=v2"
	          alt="duck"
            width="32px"
        />
      </Logostyle>
      <ToggleButton />
      <SearchBtn />
     <LoginBtn type="button"/>
    </Headerstyle>
  );
}


export default Header;
