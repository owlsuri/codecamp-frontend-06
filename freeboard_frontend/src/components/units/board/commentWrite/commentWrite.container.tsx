// 댓글쓰기 컨테이너

import React, { ChangeEvent, useState} from "react";
import CommentWriteUI from './commentWrite.presenter'
import { CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT  } from './commentWrite.queries'
import { FETCH_BOARD_COMMENTS } from "../commentRead/commentRead.queries";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { ICommentWriteProps, IMyVariables, ImyUpdateBoardCommentInput } from './commentWrite.types'
import { IMutation, IQuery, IMutationCreateBoardCommentArgs, IMutationUpdateBoardCommentArgs,IQueryFetchBoardCommentsArgs } from "../../../../commons/types/generated/types";
import { Modal } from 'antd';

export default function CommentWrite(props:ICommentWriteProps) {
    const router = useRouter();

    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [contents, setContents] = useState("");
    const [value, setValue] = useState(0);

    const [createBoardComment] = useMutation<Pick<IMutation,'createBoardComment'>,IMutationCreateBoardCommentArgs>(CREATE_BOARD_COMMENT);
    const [updateBoardComment] = useMutation<Pick<IMutation,'updateBoardComment'>,IMutationUpdateBoardCommentArgs>(UPDATE_BOARD_COMMENT);
    const { data } = useQuery<Pick<IQuery,'fetchBoardComments'>,IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, {
        variables: { boardCommentId: router.query.boardCommentId },
        });
    
    // 버튼활성화 여부 State
    const [isActive, setIsActive] = useState(false);


    // 작성자 input
    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value);

        if (event.target.value && password && contents) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    // 패스워드 input
    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);

        if ((props.isCommentEdit === true && event.target.value !=="") || 
        (writer && event.target.value && contents)) {
            setIsActive(true);
        } else {
            setIsActive(false);
    }
    };

    // 내용 input
    const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setContents(event.target.value);
        if (writer && password && event.target.value) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    // 별점 input
    const onChangeRating = (value:number) => {
        setValue(value);
    };

    // 댓글 등록하기 버튼
    const onClickComment = async () => {
        if (writer !== "" && password !== "" && contents !== "") {
            try {
                await createBoardComment({
                variables: {
                    createBoardCommentInput: {
                    writer,
                    password,
                    contents,
                    rating:value,
                    },
                    boardId: String(router.query.boardId),
                },
                refetchQueries: {
                    query : FETCH_BOARD_COMMENTS,
                    variables : { boardId : router.query.boardId },
                },
                });    
            Modal.success({
                content: '댓글 등록이 완료되었습니다!',
            });
            router.push(`/boards/${router.query.boardId}`);
            
            setWriter("")
            setPassword("")
            setContents("")
            setValue(3)

        } catch(error){
            if (error instanceof Error)
            Modal.error({
                content: error.message,
            });
            }
        }
    }
    // 댓글 수정 버튼
    const OnClickCommentEdit = async () =>{
        if (!password) {
            Modal.error({
                content: '비밀번호를 입력하세요.',
            });
            return;
        }
        if (!contents) {
            Modal.error({
                content: '수정한 내용이 없습니다.',
            });
            return;
        }
        
        const myUpdateBoardCommentInput: ImyUpdateBoardCommentInput = {
            contents,
            rating:value,
        }

        const MyVariables : IMyVariables = {
            updateBoardCommentInput: myUpdateBoardCommentInput,
            boardCommentId:props.el?._id,
            password
        }
        
        if (!value) myUpdateBoardCommentInput.rating = value;
        if (contents !== "") myUpdateBoardCommentInput.contents = contents;

        try{
        await updateBoardComment({
            variables: MyVariables,
        })

        Modal.success({
            content: '댓글 수정이 완료되었습니다!',
        });
        props.setIscommnetEdit?.(false)
        router.push(`/boards/${router.query.boardId}`);
        } catch(error){
            if(error instanceof Error)
            Modal.error({
                content: error.message,
            });            
        }
    }



    return(
        <CommentWriteUI 
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeContents={onChangeContents}
            onClickComment={onClickComment}
            OnClickCommentEdit={OnClickCommentEdit}
            isActive={isActive}
            isCommentEdit={props.isCommentEdit}
            data={data}    
            writer={writer}
            password={password}   
            contents={contents}
            value={value}   
            onChangeRating={onChangeRating}
            el={props.el}        
        />
    )  
}