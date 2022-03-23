//상세보기

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import * as S from './read.styles'
import { getDate } from "../../../../../src/commons/libraries/utils";


export default function BoardReadUI(props) {


  return (
    <S.Container>
      <S.Wrapper>
        <S.LocationBox>
          <S.Box>
            <S.Address>서울 구로구 구로동 패스트파이브 코드캠프 </S.Address>
          </S.Box>
          <S.Tail></S.Tail>
        </S.LocationBox>
        <S.WriterBox>
          <S.WriterSection>
            <FontAwesomeIcon icon={faCircleUser} size="3x" color="#BDBDBD" />
            <S.WriterInfo>
              <S.Writer>
                {props.data ? props.data.fetchBoard.writer : "loading..."}
              </S.Writer>
              <S.CreateAt>
                {getDate(
                  props.data ? props.data.fetchBoard.createdAt : "loading..."
                )}
              </S.CreateAt>
            </S.WriterInfo>
          </S.WriterSection>
          <S.Icons>
            <S.Clip src="/clip.png" />
            <S.Location src="/location.png" />
          </S.Icons>
        </S.WriterBox>
        <S.BoardBox>
          <S.Title>
            {props.data ? props.data.fetchBoard.title : "loading..."}
          </S.Title>
          <S.BoardImg src="/owl-g0594f89d7_1920.jpg" />
          <S.Contents>
            {props.data ? props.data.fetchBoard.contents : "loading..."}
          </S.Contents>
          <S.VideoBox>
            <S.Video src="" />
          </S.VideoBox>
        </S.BoardBox>
        <S.LikeBox>
          <S.Like>
            <S.LikeIcon src="/like.png" />
            <S.LikeNum>
              {props.data ? props.data.fetchBoard.likeCount : "loading..."}
            </S.LikeNum>
          </S.Like>
          <S.DisLike>
            <S.DisLikeIcon src="/dislike.png" />
            <S.DisLikeNum>
              {props.data ? props.data.fetchBoard.dislikeCount : "loading..."}
            </S.DisLikeNum>
          </S.DisLike>
        </S.LikeBox>
      </S.Wrapper>

      <S.MenuBox>
        <S.MenuBtn onClick={props.onClickList}>목록으로</S.MenuBtn>
        <S.MenuBtn onClick={props.onClickEdit}>수정하기</S.MenuBtn>
        <S.MenuBtn onClick={props.onClickDelete}>삭제하기</S.MenuBtn>
      </S.MenuBox>
    </S.Container>
  );
}