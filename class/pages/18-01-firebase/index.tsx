import {collection, getFirestore, addDoc, getDocs} from 'firebase/firestore/lite'
import { firebaseApp } from '../_app'

export default function FirebasePage(){

    const onClickSubmit = async () =>{
        // 데이터 한줄 등록하기
        const board = collection(getFirestore(firebaseApp), "board")
        await addDoc(board, {
            writer:'철수',
            title:"제목",
            contents:"내용이에용"
        })
    }

        const onClickFetch = async () =>{
        // 파이어베이스에서 데이터 꺼내오기
        const board = collection(getFirestore(firebaseApp), "board")
        const result = await getDocs(board)
        const datas = result.docs.map((el)=>el.data())
        console.log(datas)
    }

    return(
        <div>
        <div>파이어베이스 연습</div>
        <button onClick={onClickSubmit}>게시물 등록</button>
        <button onClick={onClickFetch}>게시물 조회</button>
        </div>
    )
}