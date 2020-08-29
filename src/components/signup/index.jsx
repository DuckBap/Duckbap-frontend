import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { ThemeProvider } from 'styled-components';
import {
  Container, Wrapper, theme,
  Button, Input, SignupTable, SignupTableSubTitle, ErrorMsg,
  favoriteArtist, Space, Or, NaverIcon,
} from './index.style';
import Contract from './Contract';

const Signup = () => {
  const [artists, setArtists] = useState(null);
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);
  // 에러 처리
  const [artistError, setArtistError] = useState(null);
  const [validError, setValidError] = useState(null);
  // dupError 1 : userName 2 : email 3 : nickName)
  const [dupError, setDupError] = useState(null);
  // 사용자 정보 입력을 위한 로직
  const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = (e) => {
      setter(e.target.value);
    };
    return [value, handler];
  };
  // 사용자 정보
  const [id, onChangeId] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password1, onChangePassword1] = useInput('');
  const [password2, onChangePassword2] = useInput('');
  const [email, onChangeEmail] = useInput('');
  const [artist, setArtist] = useState('');

  // 아티스트 정보를 불러오는 로직
  const getList = async () => {
    try {
      const res = await axios.get('https://prefab-imagery-286323.uc.r.appspot.com/v1/artists');
      const artistData = res.data.data;
      const opts = artistData.map((o) => ({
        value: o.artistId,
        label: o.artistName,
      }));
      setOptions(options.concat(opts));
    } catch (e) {
      setArtistError(e);
    }
  };

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        // 요청이 시작 할 때에는 error와 users를 초기화
        setArtistError(null);
        setArtists(null);
        // loading
        setLoading(true);
        const response = await axios.get('https://prefab-imagery-286323.uc.r.appspot.com/v1/artists');
        setArtists(response.data);
      } catch (e) {
        setArtistError(e);
      }
      setLoading(false);
    };
    fetchArtist();
    getList();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onFacebookBtn = (e) => {
    alert('FaceBook SignUp');
    console.log('Facebook SignUp');
  };

  const onNaverBtn = (e) => {
    alert('Naver SignUp');
    console.log('Naver SignUp');
  };

  const onChangeArtist = (e) => {
    setArtist(e.value);
  };

  // SignUp 버튼을 눌렀을 때 사용자 정보 전송.
  // 중복값, 에러 처리
  const onSignUpClick = async (e) => {
    const userInput = {
      email: String(email),
      favoriteArtist: artist,
      nickName: nickname,
      password1: String(password1),
      password2: String(password2),
      userName: id,
    };
    try {
      const res = await axios.post('https://prefab-imagery-286323.uc.r.appspot.com/v1/accounts/sign-up', userInput);
      console.log(res);
      if (res.status === 200) {
        alert('회원가입 성공!');
      }
      if (res.status === 208) {
        alert('값 중복');
        if (res.data.err.userName) {
          console.log('유저네임 중복');
          setDupError(1);
        }
        if (res.data.err.email) {
          console.log('이메일 중복');
          setDupError(2);
        }
        if (res.data.err.nickName) {
          console.log('닉네임 중복');
          setDupError(3);
        }
      }
    } catch (reason) {
      if (reason.response.status === 400) {
        console.log('잘못된 값이 들어올 때');
        setValidError(400);
      } else if (reason.response.status === 404) {
        console.log('해당 값을 통해서 회원 가입을 못할 때');
        setValidError(404);
      } else if (reason.response.status === 424) {
        console.log('참조할 수 없는 값이 들어올 때');
        setValidError(424);
      } else {
        console.log('정의되지 않은 에러');
        setValidError(999);
      }
    }
  };

  if (loading) return <div>now loading...</div>;
  if (artistError) return <div>Data를 불러오는데 실패했어요</div>;
  if (!artists) return null;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Wrapper>
          <Button className="login-facebook" color="facebook" onClick={onFacebookBtn}>
            페이스북 계정으로 가입하기
          </Button>
          <Button className="login-naver" color="naver" onClick={onNaverBtn}>
            네이버 계정으로 가입하기
          </Button>
          <Or>또는</Or>
          <SignupTable onSubmit={onSubmit}>
            <div className="signup-table-uername">
              <SignupTableSubTitle>사용자 이름</SignupTableSubTitle>
              <Input
                type="text"
                placeholder="사용하실 ID를 적어주세요"
                name="user-id"
                value={id}
                required
                onChange={onChangeId}
              />
              {dupError === 1 && <ErrorMsg>중복된 값이 있습니다.</ErrorMsg>}
            </div>
            <div className="signup-table-password">
              <SignupTableSubTitle>비밀번호</SignupTableSubTitle>
              <Input
                type="password"
                placeholder="비밀번호를 입력해 주세요"
                name="user-password"
                value={password1}
                required
                onChange={onChangePassword1}
              />
              <Input
                type="password"
                placeholder="비밀번호를 확인합니다"
                name="user-password-check"
                value={password2}
                required
                onChange={onChangePassword2}
              />
            </div>
            <div className="signup-table-email">
              <SignupTableSubTitle>이메일주소</SignupTableSubTitle>
              <Input
                type="text"
                placeholder="이메일주소를 입력해 주세요"
                name="user-email"
                value={email}
                required
                onChange={onChangeEmail}
              />
              {dupError === 2 && <ErrorMsg>중복된 값이 있습니다.</ErrorMsg>}
            </div>
            <div className="signup-table-nickname">
              <SignupTableSubTitle>닉네임</SignupTableSubTitle>
              <Input
                type="text"
                placeholder="사용하실 닉네임을 적어주세요"
                name="user-nick"
                value={nickname}
                required
                onChange={onChangeNickname}
              />
              {dupError === 3 && <ErrorMsg>중복된 값이 있습니다.</ErrorMsg>}
            </div>
            <div className="signup-table-favorite">
              <SignupTableSubTitle>가장 좋아하는 연예인</SignupTableSubTitle>
              <Select
                placeholder="나의 최애"
                options={options}
                onChange={onChangeArtist}
                styles={favoriteArtist}
              />
            </div>
          </SignupTable>
          <Space />
          <Button
            className="login"
            color="login"
            type="primary"
            htmlType="submit"
            onClick={onSignUpClick}
          >
            회원가입
          </Button>
          {validError && <ErrorMsg>유효하지않은 값입니다</ErrorMsg>}
        </Wrapper>
      </Container>
      <Contract />
    </ThemeProvider>
  );
};

export default Signup;
