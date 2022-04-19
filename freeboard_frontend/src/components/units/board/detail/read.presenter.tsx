// 디테일 프레젠터

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import * as S from './read.styles'
import { getDate } from "../../../../commons/libraries/utils";
import {IBoardReadUIProps} from './read.typescript'
import React from 'react'
import ReactPlayer from "react-player";
import { Tooltip } from 'antd';


export default function BoardReadUI(props:IBoardReadUIProps) {

  return (
    <S.Container>
      <S.Wrapper>
    {/* 작성자 정보 및 헤더 */}
        <S.WriterBox>
          <S.WriterSection>
            <FontAwesomeIcon icon={faCircleUser} size="3x" color="#BDBDBD" />
            <S.WritecdrInfo>
              <S.Writer>
                {props.data ? props.data.fetchBoard.writer : "loading..."}
              </S.Writer>
              <S.CreateAt>
                {getDate(props.data ? props.data.fetchBoard.createdAt : "loading...")}
              </S.CreateAt>
            </S.WriterInfo>
          </S.WriterSection>
    
    {/* 왼쪽상단 아이콘 */}
          <S.Icons>
            <S.Clip src="/movie.png" />
            <Tooltip title={`${props.data?.fetchBoard?.boardAddress?.address}
                    ${props.data?.fetchBoard?.boardAddress?.addressDetail}`}>                    
            <S.Location src="/pin.png" />
            </Tooltip>
          </S.Icons>
        </S.WriterBox>

    {/* 게시물 제목 */}
        <S.BoardBox>
          <S.Title>
            {props.data ? props.data.fetchBoard.title : "loading..."}
          </S.Title>

    {/* 게시물 이미지 */}
            {props.data?.fetchBoard.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <S.BoardImg
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}      
          
    {/* 게시물 내용 */}
          <S.Contents>
            {props.data ? props.data.fetchBoard.contents : "loading..."}
          </S.Contents>

    {/* 유투브 */}
          <S.VideoBox>
            {props.data?.fetchBoard.youtubeUrl && (
            <ReactPlayer url={String(props.data?.fetchBoard.youtubeUrl)} />)}
          </S.VideoBox>
        </S.BoardBox>

    {/* 좋아요 */}
        <S.LikeBox>
          <S.Like onClick={props.onClickLike}>
              <S.LikeIcon />
            <S.LikeNum>
              {props.data ? props.data.fetchBoard.likeCount : "loading..."}
            </S.LikeNum>
          </S.Like>

    {/* 싫어요 */}
          <S.DisLike>
            <S.DisLikeIcon onClick={props.onClickDisLike}/>
            <S.DisLikeNum>
              {props.data ? props.data.fetchBoard.dislikeCount : "loading..."}
            </S.DisLikeNum>
          </S.DisLike>
        </S.LikeBox>
      </S.Wrapper>

    {/* 하단 버튼 메뉴 박스 */}
      <S.MenuBox>
        <S.MenuBtn onClick={props.onClickList}>목록으로</S.MenuBtn>
        <S.MenuBtn onClick={props.onClickMoveEdit}>수정하기</S.MenuBtn>
        <S.MenuBtn onClick={props.onClickDelete}>삭제하기</S.MenuBtn>
      </S.MenuBox>
    </S.Container>
  );
}