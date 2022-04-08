import 'antd/dist/antd.css';
// import '../styles/globals.css'
import { ApolloClient, ApolloProvider, ApolloLink, InMemoryCache } from '@apollo/client'
import { AppProps } from 'next/app';
import Layout from '../src/commons/layout';
import { Global } from '@emotion/react';
import { globalStyles } from '../src/commons/styles/globalStyles';
import {createUploadLink} from 'apollo-upload-client'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNhpQON_XYQw92tArd3tcbuEz7luzQFo0",
  authDomain: "owlsurisitee.firebaseapp.com",
  projectId: "owlsurisitee",
  storageBucket: "owlsurisitee.appspot.com",
  messagingSenderId: "110090922204",
  appId: "1:110090922204:web:75a9451901ef0c46f92c19"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp ({ Component, pageProps } :AppProps) {

  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
  })

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
  <ApolloProvider client={client}>
    <Global styles={globalStyles} />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ApolloProvider>
  )
}

export default MyApp
