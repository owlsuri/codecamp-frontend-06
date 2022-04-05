// 여기에 렌딩페이지 만들기

import styled from "@emotion/styled";
import { route } from "next/dist/server/router";
import { useRouter } from "next/router";

const Back = styled.div`
  background-image: url("/images/mono.jpg");
  width: 1400px;
  height: 900px;
  background-size: cover;
  position: relative;
`;
const Box = styled.div`
  width: 700px;
  height: 250px;
  background-color: rgba(104, 136, 178, 0.55);
  position: absolute;
  top: 200px;
  left: 700px;
`;
const Message = styled.div`
  color: white;
  font-size:70px;
  padding-top: 70px;
  padding-left: 50px;
  font-weight: 600;
  :hover{
    color: rgba(0,0,0,0.7);
    cursor: pointer;
  }
`;

export default function LandingPage(){

  const router= useRouter()

  const onClickToMain = () => {
    router.push("/boards")
  }

  return(
    <div>
      <Back>  
        <Box>
          <Message onClick={onClickToMain}>Hello, Stranger!</Message>
        </Box>
      </Back>
    </div>
  )
}