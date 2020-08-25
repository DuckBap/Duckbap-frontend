import React from 'react';
import styled from 'styled-components';
import EnterList from '../CompanyList';

const ProfileImg = 'Profile.png';
const SearchImg = 'Search.png';

export const Logostyle = styled.div`
  align-items: center;
  position: absolute;
  left: 48%;
  cursor: pointer;
`;

export const Headerstyle = styled.div`
  position: fixed;
  z-index: 9999;
  box-sizing: border-box;
  min-height: 10vh;
  max-height: 13vh;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.7);
  font-size: 22px;
  font-weight: 600;
`;

const Menu = styled.div`
  z-index: 1;
  list-style: none;
  li {
    padding: 18px 10px;
  }
  flex-flow: column nowrap;
  background-color: #fff;
  position: fixed;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(100%)')};
  top: 10vh;
  left: 0;
  height: 100vh;
  width: 100%;
  padding-top: 0rem;
  transition: transform 0.3s ease-in-out;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PopupMenu = ({ open, setOpen }) => {
  return (
    <Menu open={open}>
      <EnterList setOpen={setOpen} />
    </Menu>
  );
};

const HeaderButton = styled.button`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.7rem;
  height: 1.7rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }
  div {
    width: 1.7rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#ccc' : 'grey')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const ToggleButton = ({ open, setOpen }) => {
  return (
    <div>
      <HeaderButton open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </HeaderButton>
      <PopupMenu open={open} setOpen={setOpen} />
    </div>
  );
};

export const SearchBtn = styled.img.attrs({
  src: SearchImg,
})`
  position: absolute;
  right: 4.5%;
`;

export const LoginBtn = styled.img.attrs({
  src: ProfileImg,
})`
  cursor: pointer;
  position: absolute;
  -webkit-user-drag: none;
  right: 1%;
`;
