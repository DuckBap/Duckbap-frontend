import styled from 'styled-components';

const size = {
  mobile: '770px',
  tabletS: '1023px',
  tabletM: '1220px',
  tabletL: '1280px',
  laptop: '1460px',
  desktop: '1700px',
};

export const theme = {
  mobile: `(max-width: ${size.mobile})`,
  tabletS: `(max-width: ${size.tabletS})`,
  tabletM: `(max-width: ${size.tabletM})`,
  tabletL: `(max-width: ${size.tabletL})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const Wrapper = styled.div`
  width: 150vw;
  padding: 50px 50px;
  margin-top: 20px;
  border-radius: 40px;
  display: flex;
  color: grey;
  flex-direction: column;
  border: 1px solid rgb(230, 230, 230);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.04);
  border-radius: 5px;

  @media (min-width: 768px) {
    max-width: 400px;
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 2.5rem auto;
  max-width: 25em;
  width: 90vw;
  font-size: 10pt;
  @import url('https://fonts.googleapis.com/earlyaccess/notosanskr.css');
  font-family: 'Noto Sans KR Light', Sans-serif !important;
`;

const handleColorType = (color) => {
  switch (color) {
    case 'facebook':
      return 'background: rgb(109, 132, 180);';
    case 'naver':
      return 'background: rgb(30, 200, 0)';
    case 'login':
      return 'background: #ffcf33';
    default:
      return 'background: #ffffff';
  }
};

export const Button = styled.button`
  outline: none;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: none;
  margin-top: 8px;
  color: #ffffff;
  font-weight: 600;
  ${({ color }) => handleColorType(color)};
  cursor: pointer;
  &:hover {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.04);
  }
`;

export const ErrorMsg = styled.div`
  margin: 5px 0;
  padding: 0;
  color: #ff3434;
  font-size: 12px;
  text-align: center;
`;

export const SignupTable = styled.div`
  width: 100%;
`;

export const SignupTableSubTitle = styled.div`
  margin-top: 10px;
  width: 100%;
  padding: 0px 2px 2px;
  font-size: 14px;
  color: #888888;
`;

export const Input = styled.input.attrs((props) => ({
  type: props.type,
}))`
  width: 100%;
  height: 40px;
  padding: 0px 5px;
  background: transparent;
  border-radius: 3px;
  border: 1px solid rgb(230, 230, 230);
  box-sizing: border-box;
  text-align: left;
  ::placeholder {
    color: #b8b8b8;
    font-weight: none;
  }
  margin: 2px 0;
`;

export const favoriteArtist = {
  control: () => ({
    // none of react-select's styles are passed to <Control />
    border: '1px solid rgb(230, 230, 230)',
    borderRadius: '3px',
    display: 'flex',
  }),
  placeholder: () => ({
    color: '#b8b8b8',
    fontWeight: 'none',
  }),
};

export const Space = styled.div`
  font-size: 13px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Or = styled.div`
  font-size: 12px;
  margin: 20px 0;
  text-align: center;
`;

export const NaverIcon = styled.img`
  width: 32px;
`;