// 댓글보기 컨테이너

import CommentReadUI from "./commentRead.presenter"
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT } from './commentRead.queries'
import { IMutation, IMutationDeleteBoardCommentArgs, IQuery, IQueryFetchBoardCommentsArgs } from "../../../../commons/types/generated/types";
import { MouseEvent, useState } from 'react';
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
        if (!data) return;

        fetchMore({
        variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
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

    const onClickWhoWrite = (event:MouseEvent<HTMLDivElement>) =>{        
        Modal.info({
                content: `${event.currentTarget.id}님이 작성한 댓글입니다.`,
            });  
    }


    // 댓글 삭제하기 버튼
    const onClickDelete = async (event:MouseEvent<SVGSVGElement>) =>{
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
            if(error instanceof Error)
            Modal.error({
                content: error.message,
            });
        }
    }

    function onClickOpenModal(event: MouseEvent<HTMLImageElement>){
        setIsOpenModal(true);
        if(event.currentTarget instanceof Element) setBoardCommentId(event.currentTarget.id)
    }

    function onChangeDeletePassword(event:MouseEvent<SVGSVGElement>){
        setPassword(String(event.currentTarget.value))
    }
    const handleCancel = (event:MouseEvent<HTMLButtonElement>) => {
        setIsOpenModal(false);
    };


    return(<CommentReadUI 
        data={data}
        onClickWhoWrite={onClickWhoWrite}
        onLoadMore={onLoadMore}
        deleteBoardComment={deleteBoardComment}
        isOpenModal={isOpenModal}
        onClickOpenModal={onClickOpenModal}
        onChangeDeletePassword={onChangeDeletePassword}
        onClickDelete={onClickDelete}
        handleCancel={handleCancel}
    />)
}