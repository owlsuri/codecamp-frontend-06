// 댓글쓰기 컨테이너

import React, {useState} from "react";
import CommentWriteUI from './commentWrite.presenter'
import { CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT  } from './commentWrite.queries'
import { FETCH_BOARD_COMMENTS } from "../commentRead/commentRead.queries";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";

export default function CommentWrite(props) {
    const router = useRouter();

    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [contents, setContents] = useState("");
    const [rating, setRating] = useState(1);

    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
    const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
    const { data } = useQuery(FETCH_BOARD_COMMENTS, {
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
    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
        setContents(event.target.value);
        if (writer && password && event.target.value) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }

    };

    // 별점 input
    const onChangeRating = (event: ChangeEvent<HTMLInputElement>) => {
        setRating(event.target.value);
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
                    rating,
                    },
                    boardId: String(router.query.boardId),
                },
                });    
            alert("댓글 등록 완료!");
            router.push(`/boards/${router.query.boardId}`);
            
        } catch(error){
                alert(error.message)
            }
        }
    }
    // 댓글 수정 버튼
    const OnClickCommentEdit = async () =>{
        if (!password) {
            alert("비밀번호를 입력하세요")
            return;
        }
        
        const myUpdateBoardCommentInput = {
            contents,
            rating
        }

        const MyVariables = {
            updateBoardCommentInput: myUpdateBoardCommentInput,
            boardCommentId:router.query.boardCommentId,
            password
        }
        
        if (!rating) myUpdateBoardCommentInput.rating = rating;
        if (contents !== "") myUpdateBoardCommentInput.contents = contents;
        
        await updateBoardComment({
            variables: MyVariables,
        })

        alert("댓글 수정 완료!")
        router.push(`/boards/${router.query.boardId}`);
    }



    return(
        <CommentWriteUI 
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeContents={onChangeContents}
            onClickComment={onClickComment}
            OnClickCommentEdit={OnClickCommentEdit}
            onChangeRating={onChangeRating}
            isActive={isActive}
            isCommentEdit={props.isCommentEdit}
            data={data}                    
        />
    )  
}