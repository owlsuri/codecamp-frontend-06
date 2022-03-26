// 댓글보기 컨테이너

import CommentReadUI from "./commentRead.presenter"
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD_COMMENTS } from './commentRead.queries'


export default function CommentRead(){
    const router = useRouter();

    const { data } = useQuery(FETCH_BOARD_COMMENTS, {
        variables: { boardId: String(router.query.boardId)},
    });

    const onClickToEdit = () => {
        router.push(`/boards/${router.query.boardId}`)
    }


    return(<CommentReadUI 
    data={data}
    onClickToEdit={onClickToEdit}/>)
}