import { ApolloClient, ApolloProvider, ApolloLink, InMemoryCache } from '@apollo/client'
import {createUploadLink} from 'apollo-upload-client'
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { accessTokenState } from '../store';

export default function ApolloSetting(props){
  const [accessToken, setAccessToken ] = useRecoilState(accessTokenState)

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