import styled from "@emotion/styled";

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 1200px;
margin: 50px 0 0 110px;
`;
export const New = styled.div`
text-align: end;
cursor: pointer;
`;
export const BestBox = styled.div`
display: grid;
grid-template-columns: 300px 300px 300px 300px;
border-bottom: 1px dashed #BDBDBD; 
padding-bottom: 40px;
`;
export const Container = styled.div`
display: grid;
grid-template-columns: 300px 300px 300px 300px;
`;
export const Main = styled.div`
font-size: 25px;
font-weight: 700;
width: 1200px;
margin: 50px 0 0 100px;
text-align: center;
`;
export const Row = styled.div`
margin: 20px;
background: #FFFFFF;
:hover{
    box-shadow: 5px 5px 30px 5px rgba(0, 0, 0, 0.1);
}
border: 1px solid rgba(0, 0, 0, 0.1) ;
border-radius: 5px;
display: flex;
justify-content: center;
padding: 5px;
cursor: pointer;

`;
export const Img = styled.img`
width: 240px;
height: 220px;
margin-bottom: 10px;
`;
export const Info = styled.div`
padding: 5px;
display: flex;
flex-direction: row;
`;
export const Name = styled.div`
font-size: 19px;
font-weight: 700;
width: 210px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Word = styled.div`

`;
export const Remarks = styled.div`
font-size: 12px;
color: gray;

 width: 210px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Price = styled.div`
font-size: 17px;
font-weight: 600;

`;
export const Tags = styled.div`
  width: 210px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Heart = styled.div`
color: red;
width: 30px;
text-align: center;
font-size: 20px;
padding-top: 5px;
`;
export const HeartNum = styled.div`
color: red;
font-size: 15px;
`;
export const ItemInfo = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;