// 댓글보기 컨테이너

import CommentReadUI from "./commentRead.presenter"
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT } from './commentRead.queries'
import { IMutation, IMutationDeleteBoardCommentArgs, IQuery, IQueryFetchBoardCommentsArgs } from "../../../../commons/types/generated/types";
import { MouseEvent, ChangeEvent, useState } from 'react';
import { Modal } from 'antd';


export default function CommentRead(){
    const router = useRouter();

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [boardCommentId, setBoardCommentId] = useState("");
    const [password, setPassword] = useState("");

    const { data, fetchMore } = useQuery<Pick<IQuery,'fetchBoardComments'>,IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, {
        variables: { boardId: String(router.query.boardId)},
    });
    

    const onLoadMore = () => {
        if (!data) return; // 처음엔 data가 존재하지 않기 때문에 return 요청

        fetchMore({
        variables: { page: Math.ceil(data.fetchBoardComments.length / 10) + 1 },
        updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult?.fetchBoardComments)
            return { fetchBoardComments: [...prev.fetchBoardComments] };

            return {
            fetchBoardComments: [
                ...prev.fetchBoardComments,
                ...fetchMoreResult.fetchBoardComments,
            ],
            };
        },
        });
    };

    const [deleteBoardComment] = useMutation<Pick<IMutation,'deleteBoardComment'>,IMutationDeleteBoardCommentArgs>(DELETE_BOARD_COMMENT);

    const onClickWhoWrite = (event:MouseEvent<HTMLButtonElement>) =>{        
        Modal.info({
                content: `${event.currentTarget.id}님이 작성한 댓글입니다.`,
            });  
    }

    // 댓글 수정하러가기 버튼
    const onClickToEdit = (event:MouseEvent<HTMLButtonElement>) => {
        router.push(`/boards/${router.query.boardCommentId}`)
    }

    // 댓글 삭제하기 버튼
    const onClickDelete = async () =>{
        try {
            await deleteBoardComment({
                variables: { boardCommentId, 
                             password
                            }, 
                refetchQueries: [{
                    query: FETCH_BOARD_COMMENTS,
                    variables: { boardId: router.query.boardId },
                    },
                ],
            });
            setIsOpenModal(false)
            setBoardCommentId("")

            Modal.success({
                content: '댓글 삭제가 완료되었습니다!',
            });
            router.push(`/boards/${router.query.boardId}`);

        } catch (error) {
            Modal.error({
                content: error.message,
            });
        }
    }

    function onClickOpenModal(event: MouseEvent<HTMLImageElement>){
        setIsOpenModal(true);
        if(event.target instanceof Element) setBoardCommentId(event.target.id)
    }

    function onChangeDeletePassword(event: ChangeEvent<HTMLInputElement>){
        setPassword(String(event.target.value))
    }


    return(<CommentReadUI 
        data={data}
        onClickToEdit={onClickToEdit}
        onClickDelete={onClickDelete}
        onClickWhoWrite={onClickWhoWrite}
        onClickOpenModal={onClickOpenModal}
        onChangeDeletePassword={onChangeDeletePassword}
        isOpenModal={isOpenModal}
        onLoadMore={onLoadMore}
    />)
}