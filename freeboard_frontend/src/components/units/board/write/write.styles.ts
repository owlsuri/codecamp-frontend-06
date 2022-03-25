import styled from "@emotion/styled";
import {IEditButtonProps} from './write.typescript'

export const Wrapper = styled.div`
  width: 1200px;
  padding: 60px 100px 60px 100px;
  border: 1px solid #bdbdbd;
  margin: 100px;
  box-shadow: 5px 3px 3px #bdbdbd;
`;
export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  padding-bottom: 60px;
`;
export const UserBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const User = styled.div``;
export const ListName = styled.div`
  font-size: 16px;
  padding-bottom: 10px;
`;
export const Insert = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
`;
export const TitleBox = styled.div`
  padding-top: 20px;
`;
export const InsertTitle = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
`;
export const ContentBox = styled.div`
  padding-top: 20px;
`;
export const InsertContent = styled.textarea`
  width: 996px;
  height: 480px;
  padding: 10px 0 0 10px;
  border: 1px solid #bdbdbd;
`;
export const PostNum = styled.div`
  padding-top: 20px;
  margin-bottom: 10px;
`;
export const AddressBox = styled.div`
  padding-top: 20px;
`;
export const InsertPostNum = styled.input`
  width: 77px;
  height: 52px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
`;
export const PostNumBtn = styled.button`
  width: 124px;
  height: 52px;
  padding-left: 10px;
  margin-left: 10px;
  border: 1px solid #bdbdbd;
  background-color: black;
  color: white;
`;
export const InsertAddress = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
  margin: 5px 0 10px 0;
`;
export const YoutubeBox = styled.div`
  padding-top: 20px;
`;
export const AddPhotoBox = styled.div`
  padding-top: 30px;
`;
export const UploadBox = styled.div`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
`;
export const Upload = styled.div`
  font-size: 12px;
`;
export const UploadPlus = styled.div`
  font-size: 30px;
  padding-bottom: 0;
`;
export const UploadBoxes = styled.div`
  display: flex;
  flex-direction: row;
`;
export const MainBox = styled.div`
  padding-top: 30px;
`;
export const MainRadio1 = styled.input`
  width: 10px;
  font-size: 16px;
  cursor: pointer;
`;
export const MainRadio2 = styled.input`
  width: 10px;
  margin-left: 20px;
  font-size: 16px;
  cursor: pointer;
`;
export const SubmitBtn = styled.button`
  width: 179px;
  height: 52px;
  background-color: ${(props:IEditButtonProps) => (props.isActive ? "#ffd600" : "none")};
  color: black;
  font-weight: 700;
  border: none;
  cursor: pointer;
`;
export const BtnBox = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: center;
`;
export const Error = styled.div`
  color: red;
  font-size: 12px;
  padding-top: 3px;
`;
