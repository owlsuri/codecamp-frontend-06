// 댓글보기 컨테이너

import CommentReadUI from "./commentRead.presenter"
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT } from './commentRead.queries'
import { IMutation, IMutationDeleteBoardCommentArgs, IQuery, IQueryFetchBoardCommentsArgs } from "../../../../commons/types/generated/types";


export default function CommentRead(){
    const router = useRouter();

    const { data } = useQuery<Pick<IQuery,'fetchBoardComments'>,IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, {
        variables: { boardId: String(router.query.boardId)},
    });

    const [deleteBoardComment] = useMutation<Pick<IMutation,'deleteBoardComment'>,IMutationDeleteBoardCommentArgs>(DELETE_BOARD_COMMENT);

    const onClickWhoWrite = (event) =>{        
        alert(`${event.currentTarget.id}님이 작성한 댓글입니다.`)    
    }

    // 댓글 수정하러가기 버튼
    const onClickToEdit = () => {
        router.push(`/boards/${router.query.boardCommentId}`)
    }

    // 댓글 삭제하기 버튼
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
    onClickDelete={onClickDelete}
    onClickWhoWrite={onClickWhoWrite}
    />)
}