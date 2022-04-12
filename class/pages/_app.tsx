import 'antd/dist/antd.css';
import { AppProps } from 'next/app';
import Layout from '../src/commons/layout';
import { Global } from '@emotion/react';
import { globalStyles } from '../src/commons/styles/globalStyles';
import { initializeApp } from "firebase/app";
import { RecoilRoot} from 'recoil';
import ApolloSetting from '../src/components/commons/apollo';

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



  return (
    <RecoilRoot>
        <ApolloSetting>
            <Global styles={globalStyles} />
            <Layout>
              <Component {...pageProps} />
            </Layout>
      </ApolloSetting>
    </RecoilRoot>
  )
}

export default MyApp
