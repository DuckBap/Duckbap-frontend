import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
  //padding: 50px;
  padding-top: 20px;
  //padding-bottom: 20px;

  //border: 4px #ccc;
  //border-radius: 10px;
  //border-top:1px solid #CACACA;
  //border-bottom:1px solid #CACACA;

  //box-shadow: 3px 5px 10px -6px rgba(0, 0, 0, 0.2);
`;

export const ProfileColumn = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 20px;
  margin-bottom: 10px;
  &:first-child {
    cursor: pointer;
  }
  &:first-child > div {
    font-size: large;
    font-weight: bold;
    padding: 10px 30px;
    color: rgba(0, 0, 0, 0.8);
  }
  &:first-child > img {
    width: 120px;
    height: 120px;
    border-radius: 100%;
    padding-right: 10px;
  }
`;

export const Level = styled.div`
  font-weight: bold;
  margin: 10px 5px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.8);
`;

export const Graph = styled.div`
  cursor: pointer;
  background-color: #ccc;
  //box-shadow: 3px 5px 10px -6px rgba(0, 0, 0, 0.2);
  height: 30px;
  width: 100%;
  border-radius: 40px;
  margin-bottom: 20px;
  & > span {
    display: block;
    height: 100%;
    line-height: 28px;
    text-align: right;
    width: ${(props) => props.theme.percent};
    background-color: #ffc03a;
    border-radius: 40px;
    padding: 0 5px;
    box-sizing: border-box;
    color: #fff;
    animation: stack 2s 1;
  }
  @keyframes stack {
    0% {
      width: 0;
      color: rgba(255, 255, 255, 0);
    }
    50% {
      color: rgba(255, 255, 255, 1);
    }
    100% {
      width: ${(props) => props.theme.percent};
    }
  }
`;

export const FavoriteList = styled.div`
  width: 600px;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const AddButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  outline: 0;
  border: 0;
  font-size: xx-large;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0);
  //transition: all 3000ms cubic-bezier(0.19, 1, 0.22, 1);
  transition: all 1000ms cubic-bezier(0.19, 1, 0.22, 1);
  &:hover {
    color: #ffb61a;
    //box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3), 0 3px 3px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3), 0 0 3px rgba(0, 0, 0, 0.1);
  }
`;

export const SmallIdolCard = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0);
  transition: all 1000ms cubic-bezier(0.19, 1, 0.22, 1);
  &:hover {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3), 0 3px 3px rgba(0, 0, 0, 0.1);
  }
`;
