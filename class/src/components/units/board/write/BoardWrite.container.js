import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from '@apollo/client'
import { useState } from "react";
import { CREAT_BOARD } from "./Boardwrite.queries";


export default function BoardWrite(){

    const [isActive, setIsActive] = useState(false)

    const [data, setData] = useState("");

    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const [callApi] = useMutation(CREAT_BOARD);

    const callGraphqlAPI = async () => {
    const result = await callApi({
        variables: { writer: writer, title: title, contents: contents },
    }); //graphql방식
    console.log(result);
    setData(result.data.createBoard.message);
    // setData(result.data.title)
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
        isActive={isActive}
      />
    ); 
}
