import * as S from './list.styles'
import { getDate } from '../../../../../src/commons/libraries/utils';


export default function BoardListUI(props){

    


    return (
      <S.Wrap>
        <S.LineTop></S.LineTop>
        <S.Row>
          <S.ColumnNumberTH>번호</S.ColumnNumberTH>
          <S.ColumnTitleTH>제목</S.ColumnTitleTH>
          <S.ColumnWriterTH>작성자</S.ColumnWriterTH>
          <S.ColumnDateTH>날짜</S.ColumnDateTH>
        </S.Row>
        <div>
          {props.data?.fetchBoards
            .map((el, index) => (
              <S.Row key={el._id}>
                <S.ColumnNumber>{10 - index}</S.ColumnNumber>
                <S.ColumnTitle id={el._id} onClick={props.onClickDetail}>
                  {el.title}
                </S.ColumnTitle>
                <S.ColumnWriter>{el.writer}</S.ColumnWriter>
                <S.ColumnDate>{getDate(el.createdAt)}</S.ColumnDate>
              </S.Row>
            ))}
        </div>
        <S.LineBottom></S.LineBottom>
        <S.btnBox>
          <S.CreateBtn onClick={props.onClickList}>게시물 등록하기</S.CreateBtn>
        </S.btnBox>
      </S.Wrap>
    );
} 