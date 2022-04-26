import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  padding: 70px 100px 60px 100px;
  border: 1px solid #bdbdbd;
  box-shadow: 5px 3px 3px #bdbdbd;
  margin: 100px;
`;
export const Container = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 70px;
`;
export const Images = styled.div`
width: 500px;
border-radius: 10px;
`;
export const Info = styled.div`
padding-top: 30px;
margin-left: 30px;
`;
export const Infos = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;
export const Remarks = styled.div`
color: gray;
`;
export const Name = styled.div`
font-size: 22px;
font-weight: 600;
`;
export const Price = styled.div`
font-size: 25px;
font-weight: 700;
`;
export const Contents = styled.div`
font-size: 18px;
padding-top: 20px;
height: 270px;
width: 500px;

`;
export const Tags = styled.div`
font-size: 16px;
color: #BDBDBD;
padding-top: 10px;
`;
export const Buttons = styled.div`
font-weight: 700;
`
export const Btn = styled.button`
margin-top: 30px;
font-weight: 700;
width: 150px;
height: 52px;
border: none;
margin-right: 30px;
cursor: pointer;
:hover{
  background-color: #6888B2;
  color:white;
}
`;
export const DetailBox = styled.div`

`;

export const Heart = styled.div`
color: red;
width: 30px;
text-align: center;
font-size: 20px;
padding-right: 5px;
`;
export const HeartNum = styled.div`
color: red;
font-size: 15px;
`;
export const Detail = styled.button`
width: 497px;
height: 52px;
font-weight: 600;
border: none;
margin-bottom: 30px;
cursor: pointer;
    :hover{
    background-color: #6888B2;
    color:white;
    
  }
`;
export const ContentsDetail = styled.div`

`;
export const Qna = styled.button`
width: 497px;
height: 52px;
font-weight: 600;
border: none;
margin-bottom: 30px;
cursor: pointer;


  background-color: ${(props) => (props.isShowQnA ? "#6888B2" : "none")};
  color: ${(props) => (props.isShowQnA ? "white" : "black")};
`;


export const MenuBox = styled.div`
  border-top: 1px solid #bdbdbd;
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
  `