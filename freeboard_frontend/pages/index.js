// 여기에 렌딩페이지 만들기

import styled from "@emotion/styled";

const Back = styled.div`
  background-image: url("/images/mono.jpg");
  width: 1200px;
  height: 700px;
  background-size: cover;
  position: relative;
`;
const Box = styled.div`
  width: 700px;
  height: 250px;
  background-color: rgba(104, 136, 178, 0.55);
  position: absolute;
  top: 200px;
  left: 500px;
`;
const Message = styled.div`
  color: white;
  font-size:70px;
  padding-top: 70px;
  padding-left: 30px;
`;

export default function LandingPage(){


  return(
    <div>
      <Back>  
        <Box>
          <Message>Hello, Stranger!</Message>
        </Box>
      </Back>
    </div>
  )
}