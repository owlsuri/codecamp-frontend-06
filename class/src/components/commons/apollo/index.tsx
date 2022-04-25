import { ApolloClient, ApolloProvider, ApolloLink, InMemoryCache } from '@apollo/client'
import {createUploadLink} from 'apollo-upload-client'
import { accessTokenState, userInfoState } from '../../../commons/store';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { onError } from '@apollo/client/link/error'
import { getAccessToken } from '../../../commons/libraries/getAccesstoken';



export default function ApolloSetting(props){
  const [accessToken, setAccessToken ] = useRecoilState(accessTokenState)
  const [userInfo, setUserInfo ] = useRecoilState(userInfoState)
  
  // 프론트엔드 서버가 아니라면(브라우져라면)
  if(typeof window !== 'undefined'){
    console.log("여기는 브라우져")
  } else{
    console.log("여기는 프론트엔드 서버(yarn dev)다!!")
  }
  
  useEffect(() => {
    // 옛날방식
    // const accessToken = localStorage.getItem("accessToken")
    // const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}")
    // setAccessToken(accessToken || "")  
    // setUserInfo(userInfo)
    
    // accessToken 재발급 받아서 state에 넣어주기
    getAccessToken().then((newAccessToken) =>{
      setAccessToken(newAccessToken)
    })
  },[])



  const errorLink = onError(({graphQLErrors, operation, forward}) => {

    // 1-1. 에러를 캐치
    if(graphQLErrors){
      for(const err of graphQLErrors){
        // 1-2. 해당에러가 토큰만료 에러인지 체크(UNAUTHENTICATED)
        if(err.extensions.code === "UNAUTHENTICATED"){
          
          // 2-1. refreshToken으로 accessToken을 재발급 받기
            getAccessToken().then((newAccessToken)=>{
              // 2-2. 재발급 받은 accessToken 저장하기
              setAccessToken(newAccessToken)
  
            // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기 
            operation.setContext({
              headers:{
                ...operation.getContext().headers, // 기존 헤더는 그대로 두고
                Authorization : `Bearer ${newAccessToken}` // Authorizationd의 accessToken만 바꿈
              }
            })
  
            // 3-2. 변경된 operation 재요청하기
            return forward(operation)
            })
        }
      }
    }
  })
  // 아래에 아폴로 클라이언트 정의, 지금 여기서 useMutation 같은 apollo client 사용할 수 없음 -> graphql이 restAPI -> axios 사용가능 -> graphql-request 라이브러리 사용

  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
    headers : {Authorization : `Bearer ${accessToken}`},
    credentials:"include", 
  })

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });

    return(
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
        )
}