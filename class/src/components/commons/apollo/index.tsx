import { ApolloClient, ApolloProvider, ApolloLink, InMemoryCache } from '@apollo/client'
import {createUploadLink} from 'apollo-upload-client'
import { accessTokenState } from '../../../commons/store';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';

export default function ApolloSetting(props){
  const [accessToken, setAccessToken ] = useRecoilState(accessTokenState)
  
  // 프론트엔드 서버가 아니라면(브라우져라면)
  if(typeof window !== 'undefined'){
    console.log("여기는 브라우져")
  } else{
    console.log("여기는 프론트엔드 서버(yarn dev)다!!")
  }
  
  useEffect(() => {
    const myLocalstorageAccessToken = localStorage.getItem("accessToken")
    setAccessToken(myLocalstorageAccessToken || "")  
  })

    const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    headers : {Authorization : `Bearer ${accessToken}`}
  })

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

    return(
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
        )
}