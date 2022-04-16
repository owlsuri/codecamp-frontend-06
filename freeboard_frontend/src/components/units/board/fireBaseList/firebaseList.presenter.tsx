import * as S from './fireBaseList.style'
import { v4 as uuidv4 } from "uuid";

export default function FirebaseListUI(props){

console.log(props.fireData)
  return (
    <S.Wrapper>
        <S.TableTop></S.TableTop>
      <S.Row>
        <S.ColumnHeaderBasic>번호</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderContents>내용</S.ColumnHeaderContents>
        <S.ColumnHeaderWriter>작성자</S.ColumnHeaderWriter>
      </S.Row>
      {props.fireData?.map((el: any, index: number) => (
        <S.Row key={uuidv4()}>
          <S.ColumnBasic>{index+1}</S.ColumnBasic>
          <S.ColumnTitle>{el?.title}</S.ColumnTitle>
          <S.ColumnContents>{el?.contents}</S.ColumnContents>
          <S.ColumnWriter>{el?.writer}</S.ColumnWriter>
        </S.Row>
      ))}
    </S.Wrapper>
  );

}