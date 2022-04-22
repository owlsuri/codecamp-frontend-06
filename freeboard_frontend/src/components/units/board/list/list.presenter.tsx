// 게시물 리스트 프리젠터

import * as S from './list.styles'
import { getDate } from '../../../../../src/commons/libraries/utils';
import {IBoardListUIProps} from './list.typescript'
import  Pagination  from '../../../../commons/boardList/Pagination'
import {v4 as uuidv4} from 'uuid'
import SearchBars01 from '../../../../searchBars/01/searchBars01.container';

export default function BoardListUI(props:IBoardListUIProps){


    return (
      <S.Wrap>
        {/* 베스트 게시글 */}
        <S.BoardTitle>베스트 게시글</S.BoardTitle>
        <S.BestBoards>
        {props.dataBoardBest?.fetchBoardsOfTheBest.map((el:any) => (
        <S.BestBox key={el._id} id={el._id} onClick={props.onClickDetail} >
        <S.BestImg
                  src={
                    el.images[0]
                      ? `https://storage.googleapis.com/${el.images?.[0]}`
                      : `/images/leaves.png`
                  }
                />  
            <S.BestOne>
              <S.BestTitle>{el.title}</S.BestTitle>
              <S.BestInfo>
                <div>
                  <S.BestWriterBox>
                    <S.BestWriterImg src="/profile-user.png"/>
                    <S.BestWriter>{el.writer}</S.BestWriter>
                  </S.BestWriterBox>
                  <S.BestCreatedAt>Date : {getDate(el.createdAt)}</S.BestCreatedAt>
                </div>
                <S.BestLike>
                  <S.BestLikeIcon />
                  <S.BestLikeNum>{el.likeCount}</S.BestLikeNum>
                </S.BestLike>
              </S.BestInfo>
          </S.BestOne>
        </S.BestBox>
        ))}
        </S.BestBoards>
        <SearchBars01         
              refetch={props.refetch}
              refetchBoardsCount={props.refetchBoardsCount}
              onChangeKeyword={props.onChangeKeyword}/>
        <S.LineTop></S.LineTop>
        <S.ThRow>
          <S.ColumnNumberTH>번호</S.ColumnNumberTH>
          <S.ColumnTitleTH>제목</S.ColumnTitleTH>
          <S.ColumnWriterTH>작성자</S.ColumnWriterTH>
          <S.ColumnDateTH>날짜</S.ColumnDateTH>
        </S.ThRow>
        
        <div>
          {props.data?.fetchBoards
            .map((el:any, index:number) => (
              <S.Row key={el._id}>
                <S.ColumnNumber>{10 - index}</S.ColumnNumber>
                <S.ColumnTitle id={el._id} onClick={props.onClickDetail}>
                  {el.title.replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                           .split("#$%").map((el:any)=>(<S.Word key={uuidv4()} 
                           isMatched={ props.keyword === el}>{el}</S.Word>))}
                </S.ColumnTitle>
                <S.ColumnWriter>{el.writer}</S.ColumnWriter>
                <S.ColumnDate>{getDate(el.createdAt)}</S.ColumnDate>
              </S.Row>
            ))}
        </div>
        <S.LineBottom></S.LineBottom>
        <S.btnBox>
          {/* 페이지네이션 */}
          <Pagination data={props.data} refetch={props.refetch} lastPage={props.lastPage}/>
          <S.CreateBtn onClick={props.onClickWrite}>게시물 등록하기</S.CreateBtn>
        </S.btnBox>
      </S.Wrap>
    );
} 