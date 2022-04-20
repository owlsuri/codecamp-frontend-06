import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  padding: 70px 100px 60px 100px;
  border: 1px solid #bdbdbd;
  box-shadow: 5px 3px 3px #bdbdbd;
  margin: 100px;
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
export const TitleBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding-right: 20px;
height: 80px;
padding-top: 20px;
`;
export const Remarks = styled.div`
font-size: 18px;
color: #BDBDBD;
`;
export const Name = styled.div`
font-weight: 600;
font-size: 24px;
`;
export const Heart = styled.div`
    color: red;
    font-size: larger;
`;
export const HeartNum = styled.div`

`;
export const Price = styled.div`
    font-size: 36px;
    font-weight: 700;
`;
export const Images = styled.div`

`;
export const Contents = styled.div`
font-size: 18px;
color: #4F4F4F;
`;
export const Tags = styled.div`
font-size: 16px;
color: #BDBDBD;
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
    :hover{
    background-color: #6888B2;
    color:white;
    cursor: pointer;
  }
`;