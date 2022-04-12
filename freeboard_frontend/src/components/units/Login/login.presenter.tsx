import * as S from './login.styles'

export default function LoginUI(props){


    return(
        <S.Wrapper>
            <S.Container>
                <S.Logo src='/owl.png'/>
                <S.InputBox>
                    <S.Input id="email" onChange={props.onChangeInputs} type="text" placeholder="이메일을 입력해주세요." />
                    <S.Input id="password" onChange={props.onChangeInputs} type="password" placeholder="비밀번호를 입력해주세요." />
                    <S.CheckBox>
                        <S.Check type="checkbox" />
                        <S.CheckText>로그인상태 유지</S.CheckText>
                    </S.CheckBox>
                </S.InputBox>
                <S.LoginBtn onClick={props.onClickLogin}>로그인하기</S.LoginBtn>
                <S.MenuBox>
                    <S.Menu>이메일찾기</S.Menu>
                    <S.Menu>|</S.Menu>
                    <S.Menu>비밀번호찾기</S.Menu>
                    <S.Menu>|</S.Menu>
                    <S.Menu onClick={props.onClickToJoin}>회원가입</S.Menu>
                </S.MenuBox>
            </S.Container>
        </S.Wrapper>        
    )
}