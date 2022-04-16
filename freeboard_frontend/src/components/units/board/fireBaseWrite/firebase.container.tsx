import { collection, getFirestore, addDoc, getDocs} from "firebase/firestore/lite";
import { useState } from "react";
import { firebaseApp } from "../../../../../pages/_app";
import FirebaseUIPage from "./firebase.presenter";
import { Modal } from "antd";
import { useRouter } from "next/router";

export default function FirebasePage() {

  const [ writer, setWriter ] = useState("")
  const [ title, setTitle ] = useState("")
  const [ contents, setContents ] = useState("")

  const router = useRouter(); 

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
    if(writer && title && contents){
    const board = collection(getFirestore(firebaseApp), "board");
    try{
        await addDoc(board, {
          writer,
          title,
          contents,
          timestamp: new Date()
        },
        );
        Modal.success({
          content: '등록 완료!',
        },
        );
        
        setWriter("")
        setContents("")
        setTitle("")
        
      } catch(error){
          if (error instanceof Error)
          Modal.error({
              content: error.message,
          });    
  }
}
window.location.reload()
};

  return (
    <FirebaseUIPage 
    onClickSubmit={onClickSubmit}
    onChangeWriter={onChangeWriter}
    onChangeTitle={onChangeTitle}
    onChangeContents={onChangeContents}
    />
  );
}
