import FirebaseListUI from "./firebaseList.presenter"
import { firebaseApp } from "../../../../../pages/_app"
import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore } from "firebase/firestore/lite"


export default function FirebaseList(){

    const [ fireData, setFireData ] = useState([])

  useEffect (() => {
    async function fetchBoards() {
      const board = collection(getFirestore(firebaseApp), "board");
      const result = await getDocs(board);
      const boards = result.docs.map((el) => el.data());
      setFireData(boards);
    }
    fetchBoards();
  }, []);

    return(
        <FirebaseListUI 
        fireData={fireData}
        />
    )
}