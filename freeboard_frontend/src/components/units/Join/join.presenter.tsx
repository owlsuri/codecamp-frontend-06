import * as S from './join.styles'

export default function JoinUI(){


    return(
        <S.Wrapper>
            <S.Container>
                <S.Logo src='/owl.png'/>
                <S.InputBox>
                    <S.Input id="email"  type="text" placeholder="이메일을 입력해주세요." />
                    <S.Input id="name"  type="text" placeholder="이름을 입력해주세요." />
                    <S.Input id="password"  type="password" placeholder="비밀번호를 입력해주세요." />
                    <S.Input id="passwordAgain"  type="password" placeholder="비밀번호를 다시 입력해주세요." />
                </S.InputBox>
                <S.JoinBtn >가입하기</S.JoinBtn>
            </S.Container>
        </S.Wrapper>    
    )
}