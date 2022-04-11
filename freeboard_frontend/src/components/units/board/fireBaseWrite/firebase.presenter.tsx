import FirebaseList from '../fireBaseList/firebaseList.container';
import * as S from './firebase.style'

export default function FirebaseUIPage(props) {
  

  return (
    <>
    <S.Wrapper>
      <S.Main>한줄 맛집 소개</S.Main>
      <S.Inputs>
        <S.Writer type="text" onChange={props.onChangeWriter} placeholder="작성자" />
        <S.Title type="text" onChange={props.onChangeTitle} placeholder= "위치 및 상호" />
        <S.Contents type="text" onChange={props.onChangeContents} placeholder= "한줄소개" />
        <S.Btn onClick={props.onClickSubmit}>등록하기</S.Btn>
    </S.Inputs>
    </S.Wrapper>
    <FirebaseList />
    </>
  );
}