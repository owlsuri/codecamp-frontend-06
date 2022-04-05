// 게시물 등록하기 & 수정하기 페이지 컨테이너

import { ChangeEvent, MouseEvent, useState } from 'react'
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./write.queries";
import { FETCH_BOARD } from '../detail/read.queries'
import BoardWriteUI from './write.presenter';
import {IBoardWriteProps, IUpdateBoardInput} from './write.typescript'
import { Modal } from 'antd';


export default function BoardWrite(props: IBoardWriteProps) {

  const [inputs, setInputs] = useState({
    writer:"",
    password:"",
    title:"",
    contents:"",
    youtubeUrl:"",
  });

  const [addressInputs, setAddressInputs] = useState({
    address:"",
    zipcode:"",
    addressDetail:""
  });

  // const [writer, setWriter] = useState("");
  // const [password, setPassword] = useState("");
  // const [title, setTitle] = useState("");
  // const [contents, setContents] = useState("");
  // const [youtubeUrl, setYoutubeUrl] = useState("")
  // const [address, setAddress] = useState("")
  // const [zipcode, setZipcode] = useState("")
  // const [addressDetail, setAddressDetail] = useState("")

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

  const handleComplete = (address:any) =>{
    console.log(address)
    setIsOpen(false);
    setAddressInputs(address.zonecode)
    setAddressInputs(address.address)
  }

  // 버튼 활성화 여부 useState
  const [isActive, setIsActive] = useState(false);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  // inputs
  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    })
  };

  // // 작성자 input
  // const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
  //   setWriter(event.target.value);

  //   if (event.target.value && password && title && contents) {
  //     setIsActive(true);
  //   } else {
  //     setIsActive(false);
  //   }

  //   if (event.target.value !== "") {
  //     setWriterError("");
  //   }
  // };

  // // 패스워드 input
  // const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
  //   if ((props.isEdit === true && event.target.value !=="") || 
  //   (writer && event.target.value && title && contents)) {
  //     setIsActive(true);
  //   } else {
  //     setIsActive(false);
  //   }
  //   setPassword(event.target.value);

  //   if (event.target.value !== "") {
  //     setPasswordError("");
  //   }
    
  // };

  // // 제목 input
  // const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value);

  //   if (writer && password && event.target.value && contents) {
  //     setIsActive(true);
  //   } else {
  //     setIsActive(false);
  //   }

  //   if (event.target.value !== "") {
  //     setTitleError("");
  //   }
  // };

  // // 내용 input
  // const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
  //   setContents(event.target.value);

  //   if (writer && password && title && event.target.value) {
  //     setIsActive(true);
  //   } else {
  //     setIsActive(false);
  //   }

  //   if (event.target.value !== "") {
  //     setContentsError("");
  //   }
  // };
  // // 유투브 input
  // const onChangeYoutube = (event: ChangeEvent<HTMLInputElement>) => {
  //   setYoutubeUrl(event.target.value);
  // };

  // 주소디테일 input
  const onChangeAddressInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressInputs.addressDetail(event.target.value);
  };


  // 등록하기 버튼
  const onClickSubmit = async () => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            // writer,
            // password,
            // title,
            // contents,
            // youtubeUrl,
            ...inputs,
            boardAddress:{
              ...addressInputs
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
      if (error instanceof Error)
        Modal.error({
          content: error.message,
      });
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
    if (
      !title &&
      !contents &&
      !youtubeUrl &&
      !address &&
      !addressDetail &&
      !zipcode
    ){
      Modal.error({
        content: "수정한 내용이 없습니다.",
      });
      return;
    }
  
    const updateBoardInput: IUpdateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode || address || addressDetail) {
      updateBoardInput.boardAddress = {};
      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
      if (address) updateBoardInput.boardAddress.address = address;
      if (addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }
  
 try {
      await updateBoard({
          variables: {
            boardId: router.query.boardId,
            password,
            updateBoardInput,
          },
        });
        Modal.success({
            content: '게시물 수정이 완료되었습니다!',
        });
        router.push(`/boards/${router.query.boardId}`);
        } catch (error) {
          if (error instanceof Error)
            Modal.error({
              content: error.message,
          });
        }
        }

  return (
    <BoardWriteUI
      // onChangeWriter={onChangeWriter}
      // onChangeTitle={onChangeTitle}
      // onChangeContents={onChangeContents}
      // onChangePassword={onChangePassword}
      // onChangeYoutube={onChangeYoutube}
      // onChangeAddressDetail={onChangeAddressDetail}
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

      // addressInputs.address={address}
      // addressInputs.zipcode={zipcode}

      onChangeInputs={onChangeInputs}
      onChangeAddressInputs={onChangeAddressInputs}
    />
  );
}

