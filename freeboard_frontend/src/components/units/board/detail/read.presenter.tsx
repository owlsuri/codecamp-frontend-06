// 디테일 프레젠터

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import * as S from './read.styles'
import { getDate } from "../../../../commons/libraries/utils";
import {IBoardReadUIProps} from './read.typescript'


export default function BoardReadUI(props:IBoardReadUIProps) {

  return (
    <S.Container>
      <S.Wrapper>
    {/* 주소 */}
        <S.LocationBox>
          <S.Box>
            <S.Address>서울 구로구 구로동 패스트파이브 코드캠프 </S.Address>
          </S.Box>
          <S.Tail></S.Tail>
        </S.LocationBox>

    {/* 작성자 정보 및 헤더 */}
        <S.WriterBox>
          <S.WriterSection>
            <FontAwesomeIcon icon={faCircleUser} size="3x" color="#BDBDBD" />
            <S.WriterInfo>
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
            <S.Clip src="/clip.png" />
            <S.Location src="/location.png" />
          </S.Icons>
        </S.WriterBox>

    {/* 게시물 제목 */}
        <S.BoardBox>
          <S.Title>
            {props.data ? props.data.fetchBoard.title : "loading..."}
          </S.Title>

    {/* 게시물 이미지 */}
          <S.BoardImg src="/owl-g0594f89d7_1920.jpg" />
          <S.Contents>
            {props.data ? props.data.fetchBoard.contents : "loading..."}
          </S.Contents>

    {/* 게시물 동영상 */}
          <S.VideoBox>
            <S.Video src="" />
          </S.VideoBox>
        </S.BoardBox>

    {/* 좋아요 */}
        <S.LikeBox>
          <S.Like>
            <S.LikeIcon src="/like.png" />
            <S.LikeNum>
              {props.data ? props.data.fetchBoard.likeCount : "loading..."}
            </S.LikeNum>
          </S.Like>

    {/* 싫어요 */}
          <S.DisLike>
            <S.DisLikeIcon src="/dislike.png" />
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