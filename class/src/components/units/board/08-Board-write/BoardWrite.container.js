//컨테이너

import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREAT_BOARD, UPDATE_BOARD } from "./Boardwrite.queries";
import {useRouter} from 'next/router'


export default function BoardWrite(props) {
    const router = useRouter()

  const [isActive, setIsActive] = useState(false);

  const [data, setData] = useState("");

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [callApi] = useMutation(CREAT_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  //수정하기 함수
  const onClickUpdate = async () => {
    const result = await updateBoard({
        variables:{ number:Number(router.query.mynumber) ,writer: writer, title: title, contents: contents }
    })
        alert("게시글 수정 성공!");
        router.push(`/08-05-boards/${router.query.mynumber}`);
  }
//등록하기 함수
  const callGraphqlAPI = async () => {
    const result = await callApi({
      variables: { writer: writer, title: title, contents: contents },
    }); //graphql방식
    // console.log(result);
    // setData(result.data.createBoard.message);
    // setData(result.data.title)
    alert("게시글 등록 성공!")
    router.push(`/08-05-boards/${result.data.createBoard.number}`)
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);

    if (event.target.value !== "" && title !== "" && contents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);

    if (writer !== "" && event.target.value !== "" && contents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);

    if (writer !== "" && title !== "" && event.target.value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      callGraphqlAPI={callGraphqlAPI}
      onClickUpdate={onClickUpdate}
      isActive={isActive}
      isEdit={props.isEdit}
    />
  );
}
