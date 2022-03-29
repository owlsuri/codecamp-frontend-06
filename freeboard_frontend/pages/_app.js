import "antd/dist/antd.css";
import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import styled from '@emotion/styled'
import {} from '@ant'
export const LikeIcon = styled(LikeOutlined)`
  font-size: 30px;
  color: #fdd600;
  cursor: pointer;
`;

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
