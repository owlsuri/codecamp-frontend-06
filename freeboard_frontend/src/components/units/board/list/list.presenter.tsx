// 게시물 리스트 프리젠터

import * as S from './list.styles'
import { getDate } from '../../../../../src/commons/libraries/utils';
import {IBoardListUIProps} from './list.typescript'
import  Pagination  from '../../../../commons/boardList/Pagination'
import { DatePicker, Space } from 'antd';
import {v4 as uuidv4} from 'uuid'

export default function BoardListUI(props:IBoardListUIProps){

  const { RangePicker } = DatePicker;

    return (
      <S.Wrap>
        {/* 베스트 게시글 */}
        <S.BoardTitle>베스트 게시글</S.BoardTitle>
        <S.BestBoards>
        {props.dataBoardBest?.fetchBoardsOfTheBest.map((el:any) => (
        <S.BestBox key={el._id} id={el._id} onClick={props.onClickDetail} >
            <S.BestImg src="/images/forest.jpg"/>             
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
        <S.Search>
          <S.SearchBox type="text" onChange={props.onChangeSearch} placeholder='제목을 검색해주세요' />
          <Space direction="vertical" size={12} />
          <RangePicker style={{ width:"244px", height:"52px" }} />
        </S.Search>
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
                           .split("#$%").map((el:any)=>(<S.Word key={uuidv4()} isMatched={ props.keyword === el}>{el}</S.Word>))}
                </S.ColumnTitle>
                <S.ColumnWriter>{el.writer}</S.ColumnWriter>
                <S.ColumnDate>{getDate(el.createdAt)}</S.ColumnDate>
              </S.Row>
            ))}
        </div>
        <S.LineBottom></S.LineBottom>
        <S.btnBox>
          <Pagination data={props.data} refetch={props.refetch} lastPage={props.lastPage}/>
          <S.CreateBtn onClick={props.onClickWrite}>게시물 등록하기</S.CreateBtn>
        </S.btnBox>
      </S.Wrap>
    );
} 