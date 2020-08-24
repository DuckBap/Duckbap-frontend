import React, { useState, useEffect } from 'react';
import { ThemeProvider } from "styled-components";
import {
    Container, Wrapper, theme,
} from './global'
import {
    Button, Input, SignupTable, SignupTableSubTitle
} from './style-signup'
import Contract from './Contract';
import axios from 'axios';
import Select from 'react-select';

const Signup = () => {
    const [artists, setArtists] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const fetchArtist = async () => {
            try {
                // 요청이 시작 할 때에는 error와 users를 초기화
                setError(null);
                setArtists(null);
                // loading
                setLoading(true);
                const response = await axios.get(
                    'http://localhost:8080/v1/artists'
                )
                setArtists(response.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchArtist();
        getList();
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
    };

    // 동일하게 사용되는 로직 재활용
    const useInput = (initValue = null) => {
        const [value, setter] = useState(initValue);
        const handler = (e) => {
            setter(e.target.value);
        }
        return [value, handler];
    };

    //SignUp 버튼을 눌렀을 때 사용자 정보 전송.
    const onSignUpClick = (e) => {
        console.log({
            id,
            nickname,
            password1,
            password2,
            email,
            artist,
        })
    }

    const onFacebookBtn = (e) => {
        console.log("FaceBook SignUp");
    }

    const onNaverBtn = (e) => {
        console.log("Naver SignUp");
    }

    const [id, onChangeId] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password1, onChangePassword1] = useInput('');
    const [password2, onChangePassword2] = useInput('');
    const [email, onChangeEmail] = useInput('');
    const [artist, setArtist] = useState('');

    const onChangeArtist = (e) => {
        setArtist(e.value);
        console.log("hello");
    };

    const getList = async () => {
        const res = await axios.get('http://localhost:8080/v1/artists');
        const data = res.data.data;

        const opts = data.map(o => ({
            value: o.artistId,
            label: o.artistName
        }));
        setOptions(options.concat(opts));
    }

    if (loading) return <div>now loading...</div>;
    if (error) return <div>error!</div>;
    if (!artists) return null;

    return (
        <ThemeProvider theme={theme}>
            <Container><Wrapper>
                <Button className="login-facebook" color="facebook" onClick={onFacebookBtn}>페이스북 계정으로 가입하기</Button>
                <Button className="login-naver" color="naver" onClick={onNaverBtn}>네이버 계정으로 가입하기</Button>
                <span><br /></span>
                또는
                <span><br /></span>
                <SignupTable onSubmit={onSubmit}>
                    <div className="signup-table-uername">
                        <SignupTableSubTitle>사용자 이름</SignupTableSubTitle>
                        <Input type="text" placeholder="사용하실 ID를 적어주세요" name="user-id" value={id} required onChange={onChangeId}></Input>
                        {/* {userError && <div style={{color : 'red'}}>중복된 ID 입니다.</div>} */}
                    </div>
                    <div className="signup-table-password">
                        <SignupTableSubTitle>비밀번호</SignupTableSubTitle>
                        <Input type="password" placeholder="비밀번호를 입력해 주세요" name="user-password" value={password1} required onChange={onChangePassword1}></Input>
                        <Input type="password" placeholder="비밀번호를 확인합니다" name="user-password-check" value={password2} required onChange={onChangePassword2}></Input>
                        {/* {passwordError && <div style={{color : 'red'}}>비밀번호가 일치하지 않습니다.</div>} */}
                    </div>
                    <div className="signup-table-email">
                        <SignupTableSubTitle>이메일주소</SignupTableSubTitle>
                        <Input type="text" placeholder="이메일주소를 입력해 주세요" name="user-email" value={email} required onChange={onChangeEmail}></Input>
                        {/* {emailError && <div style={{color : 'red'}}>중복된 이메일 주소입니다.</div>} */}
                    </div>
                    <div className="signup-table-nickname">
                        <SignupTableSubTitle>닉네임</SignupTableSubTitle>
                        <Input type="text" placeholder="사용하실 닉네임을 적어주세요" name="user-nick" value={nickname} required onChange={onChangeNickname}></Input>
                        {/* {nicknameError && <div style={{color : 'red'}}>비밀번호가 일치하지 않습니다.</div>} */}
                    </div>
                    <div className="signup-table-favorite">
                        <SignupTableSubTitle>가장 좋아하는 연예인</SignupTableSubTitle>
                        <Select placeholder="가장 좋아하는 연예인을 골라주세요" options={options} onChange={onChangeArtist} />
                    </div>
                </SignupTable>

                <Button className="login" color="login" type="primary" htmlType="submit" onClick={onSignUpClick}>다음으로</Button>
            </Wrapper></Container>
            <Contract />
        </ThemeProvider>
    );
}

export default Signup;
