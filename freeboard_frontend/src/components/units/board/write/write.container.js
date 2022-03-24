import { useState } from 'react'
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./write.queries";
import BoardWriteUI from './write.presenter';

export default function BoardWrite(props){
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [data, setData] = useState("");

    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [contentsError, setContentsError] = useState("");
    
    const [isActive, setIsActive] = useState(false);

    const [createBoard] = useMutation(CREATE_BOARD);
    const [updateBoard] = useMutation(UPDATE_BOARD);

    const router = useRouter();


    const onChangeWriter = (event) => {
        setWriter(event.target.value);

        if (event.target.value  && password && title && contents) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }

        if (event.target.value !== "") {
            setWriterError("");
        }
        };
  
    const onChangePassword = (event) => {

        if (writer && event.target.value && title && contents) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
        setPassword(event.target.value);

        if (event.target.value !== "") {
            setPasswordError("");
        }
        };

    const onChangeTitle = (event) => {
    setTitle(event.target.value);

        if (writer && password && event.target.value && contents) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }

        if (event.target.value !== "") {
            setTitleError("");
        }
    };
  
    const onChangeContents = (event) => {
        setContents(event.target.value);

        if (writer && password && title && event.target.value) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }

        if (event.target.value !== "") {
            setContentsError("");
        }
    };

    const onClickSubmit = async () => {
        try{
            const result = await createBoard({
                variables: {
                    createBoardInput: {
                    writer,
                    password,
                    title,
                    contents
                    //키와 밸류가 같으면 밸류 생략가능 
                    },
                },
            });
            console.log(result);
            console.log(result.data.createBoard.message);
            setData(result.data.createBoard.message);

            if (writer === "") {
                setWriterError("작성자를 입력해주세요.");
            }
            if (password === "") {
                setPasswordError("비밀번호를 입력해주세요.");
            }
            if (title === "") {
                setTitleError("제목을 입력해주세요.");
            }
            if (contents === "") {
                setContentsError("내용을 입력해주세요.");
            }
            if (
                writer !== "" && password !== "" && title !== "" && contents !== "") {
                alert("게시물 등록 완료!");
                router.push(`/boards/${result.data.createBoard._id}`);
            }            
        }catch (error){
            alert(error.message);
        }
    }

    const onClickEdit = async () =>{

      const myVariables = { boardId: router.query.boardId };
        const result = await updateBoard({
          variables: {
            updateBoardInput: {
              title: title,
              contents: contents,
            },
            password: password,
            boardId: router.query.boardId,
          },
        });
        alert("게시글 수정 성공!");
        router.push(`/boards/${router.query.boardId}`);
    }
        return (
          <BoardWriteUI
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onChangePassword={onChangePassword}
            onClickSubmit={onClickSubmit}
            writerError={writerError}
            passwordError={passwordError}
            contentsError={contentsError}
            titleError={titleError}
            isActive={isActive}
            isEdit={props.isEdit}
            onClickEdit={onClickEdit}
          />
        );
}

