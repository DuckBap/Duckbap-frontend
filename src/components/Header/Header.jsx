import React from 'react';
import styled from 'styled-components';

// 임시 헤더
const Headerstyle = styled.div`
  min-height: 10vh;
  max-height: 15vh;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-line: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
  // font-size: 22px;
  // font-family: 'Nanum Gothic', sans-serif;
  // font-weight: 600;
`;

function Header() {
  return (
    <Headerstyle>
      <img
        src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6f618edd-747e-43bc-a9cf-667c1bce61df%2Fduck.png?table=block&id=63f37a30-a74d-4979-8429-a95f8504750a&width=250&cache=v2"
        alt="duck"
        width="32px"
      ></img>
    </Headerstyle>
  );
}

export default Header;
