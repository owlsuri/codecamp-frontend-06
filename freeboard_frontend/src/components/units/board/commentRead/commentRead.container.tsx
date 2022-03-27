// 댓글보기 컨테이너

import CommentReadUI from "./commentRead.presenter"
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT } from './commentRead.queries'


export default function CommentRead(){
    const router = useRouter();

    const { data } = useQuery(FETCH_BOARD_COMMENTS, {
        variables: { boardId: String(router.query.boardId)},
    });

    const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

    const onClickToEdit = () => {
        router.push(`/boards/${router.query.boardId}/${event.target._id}`)
    }

    const onClickDelete = async () =>{
        try {
            const result = await deleteBoardComment({
            variables: { boardCommentId: router.query.boardCommentId },
            });
            console.log(result);
            alert("삭제완료")
            router.push(`/boards/${router.query.boardId}`);

        } catch (error) {
            alert(error.message);
        }
    }


    return(<CommentReadUI 
    data={data}
    onClickToEdit={onClickToEdit}
    onClickDelete={onClickDelete}/>)
}