// 게시물 리스트 프리젠터

import * as S from './list.styles'
import { getDate } from '../../../../../src/commons/libraries/utils';
import {IBoardListUIProps} from './list.typescript'
import  Pagination  from '../../../../commons/boardList/Pagination'

export default function BoardListUI(props:IBoardListUIProps){

    return (
      <S.Wrap>
        {/* 베스트 게시글 */}
        <S.BoardTitle>베스트 게시글</S.BoardTitle>
        <S.BestBoards>
         {props.dataBoardBest?.fetchBoardsOfTheBest.map((el) => (
        <S.BestBox key={el._id}>
            <S.BestImg src="/images/forest.jpg"/>             
            <S.BestOne>
              <S.BestTitle>{el.title}</S.BestTitle>
              <S.BestWriterBox>
                <S.BestWriterImg src="/profile-user.png"/>
                <S.BestWriter>{el.writer}</S.BestWriter>
              </S.BestWriterBox>
              <S.BestCreatedAt>Date : {getDate(el.createdAt)}</S.BestCreatedAt>
          </S.BestOne>
        </S.BestBox>
         ))}
         </S.BestBoards>
        <S.LineTop></S.LineTop>
        <S.Row>
          <S.ColumnNumberTH>번호</S.ColumnNumberTH>
          <S.ColumnTitleTH>제목</S.ColumnTitleTH>
          <S.ColumnWriterTH>작성자</S.ColumnWriterTH>
          <S.ColumnDateTH>날짜</S.ColumnDateTH>
        </S.Row>
        
        <div>
          {props.data?.fetchBoards
            .map((el:any, index:number) => (
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
          <Pagination data={props.data} refetch={props.refetch} lastPage={props.lastPage}/>
          <S.CreateBtn onClick={props.onClickList}>게시물 등록하기</S.CreateBtn>
        </S.btnBox>
      </S.Wrap>
    );
} 