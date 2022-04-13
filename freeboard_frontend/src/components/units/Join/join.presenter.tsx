import * as S from './join.styles'

export default function JoinUI(props){


    return(
        <S.Wrapper>
            <S.Container>
                <S.Logo src='/owl.png'/>
                <S.InputBox>
                    <S.Input onChange={props.onChangeEmail}  type="text" placeholder="이메일을 입력해주세요." />
                    <S.Error>{props.inputErrors.email}</S.Error>
                    <S.Input  onChange={props.onChangeName} type="text" placeholder="이름을 입력해주세요." />
                    <S.Error>{props.inputErrors.name}</S.Error>
                    <S.Input onChange={props.onChangePassword} type="password" placeholder="비밀번호를 입력해주세요." />
                    <S.Error>{props.inputErrors.password}</S.Error>
                   <S.Input onChange={props.onChangePasswordAgain} type="password" placeholder="비밀번호를 다시 입력해주세요." />
                    <S.Error>{props.inputErrors.passwordAgain}</S.Error>
                </S.InputBox>
                <S.JoinBtn onClick={props.onClickJoin}>가입하기</S.JoinBtn>
            </S.Container>
        </S.Wrapper>    
    )
}