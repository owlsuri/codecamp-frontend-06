import * as S from './fireBaseList.style'
import { v4 as uuidv4 } from "uuid";

export default function FirebaseListUI(props){


  return (
    <S.Wrapper>
        <S.TableTop></S.TableTop>
      <S.Row>
        <S.ColumnHeaderBasic>번호</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderContents>내용</S.ColumnHeaderContents>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
      </S.Row>
      {props.fireData?.reverse().map((el: any, index: number) => (
        <S.Row key={uuidv4()}>
          <S.ColumnBasic>{index+1}</S.ColumnBasic>
          <S.ColumnTitle>{el.title}</S.ColumnTitle>
          <S.ColumnContents>{el.contents}</S.ColumnContents>
          <S.ColumnBasic>{el.writer}</S.ColumnBasic>
        </S.Row>
      ))}
    </S.Wrapper>
  );

}