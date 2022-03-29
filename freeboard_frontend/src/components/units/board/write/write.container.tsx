// 게시물 등록하기 & 수정하기 페이지 컨테이너

import { ChangeEvent, MouseEvent, useState } from 'react'
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./write.queries";
import { FETCH_BOARD } from '../detail/read.queries'
import BoardWriteUI from './write.presenter';
import {IBoardWriteProps, IMyVariables, IMyUpdateBoardInput} from './write.typescript'
import { Modal } from 'antd';
import DaumPostcode from 'react-daum-postcode';

export default function BoardWrite(props: IBoardWriteProps) {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("")
  const [address, setAddress] = useState("")
  const [zipcode, setZipcode] = useState("")

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  // 모달 주소입력
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleComplete = (address) =>{
    console.log(address)
    setIsOpen(false);
    setZipcode(address.zonecode)
    setAddress(address.address)

  }

  // 버튼 활성화 여부 useState
  const [isActive, setIsActive] = useState(false);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  // 작성자 input
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);

    if (event.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    if (event.target.value !== "") {
      setWriterError("");
    }
  };

  // 패스워드 input
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    if ((props.isEdit === true && event.target.value !=="") || 
    (writer && event.target.value && title && contents)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    setPassword(event.target.value);

    if (event.target.value !== "") {
      setPasswordError("");
    }
    
  };

  // 제목 input
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
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

  // 내용 input
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
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
  // 유투브 input
  const onChangeYoutube = (event) => {
    setYoutubeUrl(event.target.value);
  };

  // 주소 input
  // const onChangeAddress = (event) => {
  //   setBoardAddress(event.target.value);
  // };


  // 등록하기 버튼
  const onClickSubmit = async () => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents,
            youtubeUrl,
            boardAddress:{
              zipcode,
              address,
              // boardAddress
            },
          },
        },
      });
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
      if (writer !== "" && password !== "" && title !== "" && contents !== "") {

        Modal.success({
              content: '게시물 등록이 완료되었습니다!',
        });

          console.log(result)
        router.push(`/boards/${result.data.createBoard._id}`);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  // 게시글 수정 버튼
  const onClickEdit = async (event: MouseEvent<HTMLButtonElement>) => {
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.")
      return;
    }
    if ((event.target as HTMLButtonElement).value !== "") {
      setPasswordError("");
    }
    if(!title && !contents && !youtubeUrl){
      alert("수정한 내용이 없습니다")
      return;
    }
  
    const myUpdateBoardInput: IMyUpdateBoardInput = {};

    const myVariables:IMyVariables = {
      updateBoardInput: myUpdateBoardInput,
      boardId: router.query.boardId,
      password
    };

    if (title) myUpdateBoardInput.title = title;
    if (contents) myUpdateBoardInput.contents = contents;
    if (youtubeUrl) myUpdateBoardInput.youtubeUrl = youtubeUrl;

    await updateBoard({
      variables: myVariables,
    });
    alert("게시글 수정 성공!");
    router.push(`/boards/${router.query.boardId}`);
  };

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangePassword={onChangePassword}
      onChangeYoutube={onChangeYoutube}
      onClickSubmit={onClickSubmit}
      writerError={writerError}
      passwordError={passwordError}
      contentsError={contentsError}
      titleError={titleError}
      isActive={isActive}
      isEdit={props.isEdit}
      onClickEdit={onClickEdit}
      data={data}

      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      handleComplete={handleComplete}
      isOpen={isOpen}

      address={address}
      zipcode={zipcode}


    />
  );
}

