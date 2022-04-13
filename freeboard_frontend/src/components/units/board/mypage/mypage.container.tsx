// 마이페이지
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { accessTokenState } from "../../../../commons/store";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginSuccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const router = useRouter();
  

  useEffect(() => {
        if (!accessToken) {
          alert("로그인을 먼저 해주세요.");
          router.push("/login");
        } 
  }, []);


  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다!!</div>;
}