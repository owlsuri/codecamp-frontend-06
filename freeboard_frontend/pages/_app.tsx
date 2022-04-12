import "antd/dist/antd.css";
import "../styles/globals.css";
import Layout from '../src/commons/layout/index'
import { initializeApp } from "firebase/app";
import { AppProps } from "next/app";
import { RecoilRoot} from 'recoil';
import ApolloSetting from "../src/commons/apollo";

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


  return (
    <RecoilRoot>
        <ApolloSetting>
            <Layout>
              <Component {...pageProps} />
            </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
