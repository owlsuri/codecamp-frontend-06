import { collection, getFirestore, addDoc, getDocs} from "firebase/firestore/lite";
import { firebaseApp } from "../../../../../pages/_app";
import FirebaseUIPage from "./firebase.presenter";



export default function FirebasePage() {

  const onClickSubmit = async () => {
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, {
      writer: "수리",
      title: "테스트",
      contents: "성공????",
    });
  };

  const onClickFetch = async () => {
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const datas = result.docs.map((el) => el.data());
    console.log(datas);
  };

  return (
    <FirebaseUIPage 
    onClickSubmit={onClickSubmit}
    onClickFetch={onClickFetch}

    
    />
  );
}
