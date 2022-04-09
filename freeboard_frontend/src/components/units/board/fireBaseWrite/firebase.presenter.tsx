import * as S from './firebase.style'

export default function FirebaseUIPage(props) {
  

  return (
    <S.Wrapper>
      <h2>한줄평입력하기</h2>
      <S.Writer type="text" onChange={props.onChangeWriter} placeholder="작성자를 입력해주세요" />
      <S.Title type="text" onChange={props.onChangeTitle} placeholder= "제목을 입력해주세요" />
      <S.Contents type="text" onChange={props.onChangeContents} placeholder= "내용을 입력해주세요" />
      <button onClick={props.onClickSubmit}>등록하기</button>
      <button onClick={props.onClickFetch}>조회하기</button>
    </S.Wrapper>
  );
}