// 디테일 스타일

import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1200px;
  margin: 100px;
`;
export const Wrapper = styled.div`
  width: 1200px;
  padding: 30px 100px 60px 100px;
  border: 1px solid #bdbdbd;
  box-shadow: 5px 3px 3px #bdbdbd;
`;
export const LocationBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 18px;
`;
export const Box = styled.div`
  width: 376px;
  height: 64px;
  background-color: #666666;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Address = styled.div`
  color: #ffffff;
`;
export const Tail = styled.div`
  width: 0px;
  height: 0px;
  border-bottom: 10px solid #666666;
  border-left: 0px solid transparent;
  border-right: 10px solid transparent;
  transform: rotate(-180deg);
`;

export const WriterBox = styled.div`
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
`;
export const WriterSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const WriterInfo = styled.div`
  padding-left: 15px;
`;
export const Writer = styled.div`
  font-size: 24px;
  font-weight: 600;
`;
export const CreateAt = styled.div`
  font-size: 16px;
  color: #828282;
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
`;
export const Clip = styled.img`
  width: 30px;
  margin-right: 20px;
`;
export const Location = styled.img`
  width: 30px;
`;
export const BoardBox = styled.div`
  padding-top: 70px;
`;
export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
`;
export const BoardImg = styled.img`
  width: 996px;
  margin-top: 30px;
`;
export const Contents = styled.div`
  padding-top: 30px;
  font-size: 16px;
`;
export const VideoBox = styled.div`
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Video = styled.iframe`
  width: 486px;
  height: 240px;
`;
export const LikeBox = styled.div`
  padding: 100px 0 50px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Like = styled.div`
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LikeIcon = styled.img`
  width: 30px;
  height: 30px;
`;
export const LikeNum = styled.div`
  padding-top: 5px;
  font-weight: 600;
  color: #ffd600;
`;
export const DisLike = styled.div`
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const DisLikeNum = styled.div`
  padding-top: 5px;
  font-weight: 600;
  color: #828282;
`;
export const DisLikeIcon = styled.img`
  width: 30px;
  height: 30px;
`;
export const MenuBox = styled.div`
  border-bottom: 1px solid #bdbdbd;
  padding: 70px 0 70px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MenuBtn = styled.button`
  width: 179px;
  height: 45px;
  font-size: 16px;
  font-weight: 600;
  background-color: #ffffff;
  margin: 20px;
  border: 1px solid #bdbdbd;

  cursor: pointer;
`;
  export const CommentBox= styled.div`
  padding-top: 30px;
`;
export const CommentTitleBox= styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CommentTitle= styled.div`
  font-weight: 600;
  font-size: 18px;
  margin-left: 5px;
`;
export const Star= styled.div`
  margin-left: 20px;
`;
export const CommentInputBox= styled.div`
  width:1200px;
  border: 1px solid #BDBDBD;
`;
export const CommentInput= styled.textarea`
  width: 1198px;
  height: 108px;
  padding: 10px;
  border: 1px solid #bdbdbd;
  color: #bdbdbd;
  border: none;
`;
export const CommentUser= styled.div`
  width: 1200px;
  height: 108px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CommentWriter= styled.input`
  width: 180px;
  height: 52px;
  margin-right: 20px;
  padding: 10px;
  border: 1px solid #BDBDBD;
`;
export const CommentPassword= styled.input`
  width: 180px;
  height: 52px;
  padding: 10px;
  border: 1px solid #bdbdbd;
`;
export const CommentInputBottom= styled.div`
  border-top: 1px solid #BDBDBE;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const CommentCount= styled.div`
padding: 12px 0 0 10px;
  width: 180px;
  height: 52px;
  color: #bdbdbd;
  font-size: 16px;
`
export const CommentInputBtn= styled.button`
  width: 91px;
  height: 52px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
`;
export const CommentShowBox= styled.div`
  width: 1200px;
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px ;
  border-bottom: 1px solid #BDBDBD;
`;
export const CommentUserName= styled.div`
  font-weight: 600;

`;
export const CommentUserInfo= styled.div`
  display: flex;
  justify-content: space-between;
`;
  export const CommentStar= styled.div`
  margin-left: 20px;
`;
  export const Comment= styled.div`
  padding-top: 10px;
`;
  export const CommentDate= styled.div`
  padding-top: 30px;
`;
export const CommentUserImg= styled.div`
  width: 5.5%;
  padding-bottom: 30px;

`;
export const CommentDesc= styled.div`

`;
export const CommentDescBox= styled.div`
  width: 94.5%;
  padding-top: 20px;

`;
export const CommentIcon= styled.div`
  display: flex;
  justify-content: space-between;
  width: 40px;

`;
export const CommentUserProfile= styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;