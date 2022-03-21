//상세게시판
import {
  Container,
  Wrapper,
  LocationBox,
  Box,
  Address,
  Tail,
  WriterBox,
  WriterSection,
  WriterInfo,
  Writer,
  CreateAt,
  Icons,
  Clip,
  Location,
  BoardBox,
  Title,
  BoardImg,
  Contents,
  Video,
  VideoBox,
  LikeBox,
  Like,
  LikeIcon,
  LikeNum,
  DisLike,
  DisLikeIcon,
  DisLikeNum,
  MenuBox,
  MenuBtn,
} from "../../../styles/boardDetail";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { useRouter } from "next/router";

    const FETCH_BOARD = gql`
      query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId) {
          writer
          title
          contents
          createdAt
          likeCount
          dislikeCount
        }
      }
    `;


export default function boardDetail(){
    const router = useRouter();

        const { data } = useQuery(FETCH_BOARD, {
            variables: { boardId: router.query.boardId },
        });

        console.log(data);

    return (
      <Container>
        <Wrapper>
          <LocationBox>
            <Box>
              <Address>서울 구로구 구로동 패스트파이브 코드캠프 </Address>
            </Box>
            <Tail></Tail>
          </LocationBox>
          <WriterBox>
            <WriterSection>
              <FontAwesomeIcon icon={faCircleUser} size="3x" color="#BDBDBD" />
              <WriterInfo>
                <Writer>{data ? data.fetchBoard.writer : "loading..."}</Writer>
                <CreateAt>
                  {data ? data.fetchBoard.createdAt.slice(0, 10) : "loading..."}
                </CreateAt>
              </WriterInfo>
            </WriterSection>
            <Icons>
              <Clip src="/clip.png" />
              <Location src="/location.png" />
            </Icons>
          </WriterBox>
          <BoardBox>
            <Title>{data ? data.fetchBoard.title : "loading..."}</Title>
            <BoardImg src="/owl-g0594f89d7_1920.jpg" />
            <Contents>
              {data ? data.fetchBoard.contents : "loading..."}
            </Contents>
            <VideoBox>
              <Video src="" />
            </VideoBox>
          </BoardBox>
          <LikeBox>
            <Like>
              <LikeIcon src="/like.png" />
              <LikeNum>
                {data ? data.fetchBoard.likeCount : "loading..."}
              </LikeNum>
            </Like>
            <DisLike>
              <DisLikeIcon src="/dislike.png" />
              <DisLikeNum>
                {data ? data.fetchBoard.dislikeCount : "loading..."}
              </DisLikeNum>
            </DisLike>
          </LikeBox>
        </Wrapper>

        <MenuBox>
          <MenuBtn>목록으로</MenuBtn>
          <MenuBtn>수정하기</MenuBtn>
          <MenuBtn>삭제하기</MenuBtn>
        </MenuBox>
      </Container>
    );
}