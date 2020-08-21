import React, { useState } from 'react';
import styled from 'styled-components';
import EnterpriseList from '../IdolList/EnterpriseList';
import ProfileImg from './Profile.png';
import SearchImg from './Search.png';

export const Logostyle = styled.div`
	align-items: center;
	position:absolute;
	left:49%;
`;

export const Headerstyle = styled.div`
  min-height: 10vh;
  max-height: 13vh;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  border-line: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.7);
  // font-size: 22px;
  // font-family: 'Nanum Gothic', sans-serif;
  // font-weight: 600;
  }
`;

const Menu = styled.div`
  list-style: none;
  li {
    padding: 18px 10px;
  }
    flex-flow: column nowrap;
    background-color: #FFF;
    position: fixed;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(100%)'};
    top: 10vh;
    left: 0;
    height: 100vh;
    width: 100%;
    padding-top: 0rem;
    transition: transform 0.3s ease-in-out;
  
    @media (max-width: 768px){ width: 100% }

  }
`;

export const PopupMenu = ({ open }) => {
	
    return  (
		<Menu open={open}>
			<EnterpriseList />
		</Menu>
    )
} 

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
        background-color: ${({ open }) => open ? '#ccc' : 'grey'};
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

export const ToggleButton = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <div>
      <HeaderButton open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </HeaderButton>
	  <PopupMenu open={open}/>
    </div>
  )
}

/*export const ProfileButton = () => {

}*/

export const SearchBtn = styled.img.attrs({
  src: SearchImg,
})`
align-items: center;
  position: absolute;
  right: 4%;
  @media (max-width:1024px){
    right: 7%;
  }
  @media (max-width:768px){
    right: 8%;
  }
`;

export const LoginBtn = styled.img.attrs({
  src: ProfileImg,
})`
  cursor: pointer;
  right: 1%;
  padding-top: 1px;
  position: absolute;
`;