// 댓글 컨테이너

import React, {useState} from "react";
import CommentUI from './commentWrite.presenter'
import { CREATE_BOARD_COMMENT } from './commentWrite.queries'
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";

export default function CommentPage() {
    const router = useRouter();

    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [contents, setContents] = useState("");
    const [rating, setRating] = useState(1);

    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

    // 작성자 input
    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value);
    };

    // 패스워드 input
    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    // 내용 input
    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
        setContents(event.target.value);
    };

    // 별점 input
    const onChangeRating = (event: ChangeEvent<HTMLInputElement>) => {
        setRating(event.target.value);
    };

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


    return(
        <CommentUI 
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeContents={onChangeContents}
            onClickComment={onClickComment}
            onChangeRating={onChangeRating}
        />
    )  
}