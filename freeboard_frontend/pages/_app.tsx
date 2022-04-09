import "antd/dist/antd.css";
import "../styles/globals.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import Layout from '../src/commons/layout/index'
import { createUploadLink } from "apollo-upload-client";
import { initializeApp } from "firebase/app";
import { AppProps } from "next/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNhpQON_XYQw92tArd3tcbuEz7luzQFo0",
  authDomain: "owlsurisitee.firebaseapp.com",
  projectId: "owlsurisitee",
  storageBucket: "owlsurisitee.appspot.com",
  messagingSenderId: "110090922204",
  appId: "1:110090922204:web:75a9451901ef0c46f92c19",
};


// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);


function MyApp({ Component, pageProps }: AppProps) {
  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
