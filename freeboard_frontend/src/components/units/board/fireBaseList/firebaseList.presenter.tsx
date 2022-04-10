import * as S from './fireBaseList.style'
import { v4 as uuidv4 } from "uuid";

export default function FirebaseListUI(props){


  return (
    <S.Wrapper>
        <S.TableTop></S.TableTop>
      <S.Row>
        <S.ColumnHeaderBasic>번호</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>제목</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>내용</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
      </S.Row>
      {props.fireData?.reverse().map((el: any, index: number) => (
        <S.Row key={uuidv4()}>
          <S.ColumnBasic>{index+1}</S.ColumnBasic>
          <S.ColumnBasic>{el.title}</S.ColumnBasic>
          <S.ColumnTitle>{el.contents}</S.ColumnTitle>
          <S.ColumnBasic>{el.writer}</S.ColumnBasic>
        </S.Row>
      ))}
    </S.Wrapper>
  );

}