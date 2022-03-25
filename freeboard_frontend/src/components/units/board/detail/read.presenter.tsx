// 디테일 프레젠터

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faComment, faPencil, faX } from "@fortawesome/free-solid-svg-icons";
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
      <S.CommentBox>
        <S.CommentTitleBox>
          <FontAwesomeIcon icon={faComment} color="#ffd600" />
          <S.CommentTitle>댓글</S.CommentTitle>
          </S.CommentTitleBox>

    {/* 댓글 */}
        <S.CommentUser>
          <S.CommentWriter type="text" placeholder="작성자" />
          <S.CommentPassword type="password" placeholder="비밀번호" />
          <S.Star>⭐⭐⭐⭐⭐</S.Star>
        </S.CommentUser>  

        <S.CommentInputBox>
          <S.CommentInput placeholder="개인정보를 공유 및 요청하거나 명예회손, 무단광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에대한 책임은 게시자에게 있습니다."></S.CommentInput>
          <S.CommentInputBottom>
            <S.CommentCount>0/100</S.CommentCount>
            <S.CommentInputBtn>등록하기</S.CommentInputBtn>
          </S.CommentInputBottom>          
          </S.CommentInputBox>

          <S.CommentShowBox>
            <S.CommentUserImg>
              <FontAwesomeIcon icon={faCircleUser} size="3x" color="#BDBDBD" />
            </S.CommentUserImg>
            <S.CommentDescBox>           
              <S.CommentUserInfo>
                <S.CommentUserProfile>
                  <S.CommentUserName>노원두</S.CommentUserName>
                  <S.CommentStar>⭐⭐⭐⭐⭐</S.CommentStar>
                </S.CommentUserProfile>
                <S.CommentIcon>
                  <FontAwesomeIcon icon={faPencil}  color="#BDBDBD" />
                  <FontAwesomeIcon icon={faX} color="#BDBDBD" />
                </S.CommentIcon>
              </S.CommentUserInfo>
              <S.CommentDesc>
                  <S.Comment>진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보 부탁드립니다~!</S.Comment>
                  <S.CommentDate>{getDate(
                    // props.data ? props.data.fetchBoardComment.createdAt : "loading..."
                  )}</S.CommentDate>
              </S.CommentDesc>
            </S.CommentDescBox> 
          </S.CommentShowBox>
        
      </S.CommentBox>



    </S.Container>
  );
}