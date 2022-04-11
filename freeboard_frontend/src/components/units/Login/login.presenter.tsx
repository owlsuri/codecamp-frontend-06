import * as S from './login.styles'

export default function LoginUI(){


    return(
        <S.Wrapper>
            <S.Container>
                <S.Logo />
                <S.InputBox>
                    <S.Input type="text" placeholder="이메일을 입력해주세요." />
                    <S.Input type="password" placeholder="비밀번호를 입력해주세요." />
                    <S.Check type="checkbox" /> 로그인상태 유지
                </S.InputBox>
                <S.LoginBtn>로그인하기</S.LoginBtn>
                <S.MenuBox>
                    <S.Menu>이메일찾기</S.Menu>
                    <S.Menu>|</S.Menu>
                    <S.Menu>비밀번호찾기</S.Menu>
                    <S.Menu>|</S.Menu>
                    <S.Menu>회원가입</S.Menu>
                </S.MenuBox>
            </S.Container>
        </S.Wrapper>        
    )
}