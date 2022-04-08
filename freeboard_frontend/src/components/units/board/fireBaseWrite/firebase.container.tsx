import { collection, getFirestore, addDoc, getDocs} from "firebase/firestore/lite";
import { useState } from "react";
import { firebaseApp } from "../../../../../pages/_app";
import FirebaseUIPage from "./firebase.presenter";



export default function FirebasePage() {

  const [ writer, setWriter ] = useState("")
  const [ title, setTitle ] = useState("")
  const [ contents, setContents ] = useState("")


  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
  }
  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }
  function onChangeContents(event: ChangeEvent<HTMLInputElement>) {
    setContents(event.target.value);
  }

  const onClickSubmit = async () => {
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, {
      writer,
      title,
      contents
    });
    alert("등록이 완료되었습니다.")
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
    onChangeWriter={onChangeWriter}
    onChangeTitle={onChangeTitle}
    onChangeContents={onChangeContents}    
    />
  );
}
