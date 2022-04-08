// 게시물 등록하기 & 수정하기 페이지 컨테이너

import { ChangeEvent, MouseEvent, useState, useRef } from 'react'
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./write.queries";
import { FETCH_BOARD } from '../detail/read.queries'
import BoardWriteUI from './write.presenter';
import {IBoardWriteProps, IUpdateBoardInput} from './write.typescript'
import { Modal } from 'antd';
import {CheckFileValidation} from '../../../../libraries/validation'


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

  const [inputError, setInputError] = useState({
    writer:"",
    password:"",
    title:"",
    contents:"",
  })
  const [imageUrl, setImageUrl] = useState<string | undefined>("")

  const [uploadFile] = useMutation(UPLOAD_FILE)
  const fileRef = useRef<HTMLInputElement>(null)

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

  const handleComplete = (data:any) =>{
    console.log(data.zonecode)
    setIsOpen(false);
    
    setAddressInputs({...addressInputs, address:data.address, zipcode:data.zonecode})
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
    if(inputs){
      setIsActive(true)
    } else{
      setIsActive(false)
    } 
  };


  // 주소디테일 input
  const onChangeAddressInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressInputs({ ...addressInputs, addressDetail : event.target.value });
  };


  // 등록하기 버튼
  const onClickSubmit = async (event) => {
   
    try {
      const result = await createBoard({
        variables: {
          createBoardInput:{...inputs,
          images: [imageUrl],
          boardAddress :{...addressInputs},       
          },
        },

      })
        router.push(`/boards/${result.data.createBoard._id}`);
    
      if (event.target.value){
        setInputError((prev) => ({ ...prev, [event.target.id]: "" }));
      }
      // if (inputs.writer === "") {
      //   setWriterError("작성자를 입력해주세요.");
      // }
      // if (inputs.password === "") {
      //   setPasswordError("비밀번호를 입력해주세요.");
      // }
      // if (inputs.title === "") {
      //   setTitleError("제목을 입력해주세요.");
      // }
      // if (inputs.contents === "") {
      //   setContentsError("내용을 입력해주세요.");
      // }
      // if (inputs.writer !== "" && inputs.password !== "" && inputs.title !== "" && inputs.contents !== "") {

        Modal.success({
              content: '게시물 등록이 완료되었습니다!',
        });
      
    } catch (error) {
      if (error instanceof Error){
        Modal.error({
          content: error.message,
          
      });

      console.log(addressInputs)
    }
  }
  };
  
  // 이미지 등록하기
  const onClickImg = () => {
      fileRef.current?.click()
  }

  const onChangeFile = async (event:ChangeEvent<HTMLInputElement>) =>{
      const file = event.target.files?.[0]
      console.log(file)

      const isValid = CheckFileValidation(file) 
      if(!isValid) return;


      try{
          const result = await uploadFile({
              variables:{file}
          })
  
          console.log(result.data?.uploadFile.url)
  
          setImageUrl(result.data?.uploadFile.url)

      } catch(error){
          Modal.error({
              content: error.message
          });
          
      }
  }

  // 게시글 수정 버튼
  const onClickEdit = async (event: MouseEvent<HTMLButtonElement>) => {
  
    // if (!password) {
    //   setPasswordError("비밀번호를 입력해주세요.")
    //   return;
    // }
    // if ((event.target as HTMLButtonElement).value !== "") {
    //   setPasswordError("");
    // }
    if (
      !inputs.title &&
      !inputs.contents &&
      !inputs.youtubeUrl &&
      !addressInputs.address &&
      !addressInputs.addressDetail &&
      !addressInputs.zipcode
    ){
      Modal.error({
        content: "수정한 내용이 없습니다.",
      });
      return;
    }
  
    const updateBoardInput: IUpdateBoardInput = {};
    if (inputs.title) updateBoardInput.title = inputs.title;
    if (inputs.contents) updateBoardInput.contents = inputs.contents;
    if (inputs.youtubeUrl) updateBoardInput.youtubeUrl = inputs.youtubeUrl;
    if (imageUrl) updateBoardInput.imageUrl= imageUrl;
    if (inputs.zipcode || addressInputs.address || addressInputs.addressDetail) {
      updateBoardInput.boardAddress = {};
      if (addressInputs.zipcode) updateBoardInput.boardAddress.zipcode = addressInputs.zipcode;
      if (addressInputs.address) updateBoardInput.boardAddress.address = addressInputs.address;
      if (addressInputs.addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressInputs.addressDetail;
    }
  
 try {
      await updateBoard({
          variables: {
            boardId: router.query.boardId,
            password:inputs.password,
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
      // writerError={writerError}
      // passwordError={passwordError}
      // contentsError={contentsError}
      // titleError={titleError}
      isActive={isActive}
      isEdit={props.isEdit}
      onClickEdit={onClickEdit}
      data={data}

      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      handleComplete={handleComplete}
      isOpen={isOpen}

      address={addressInputs.address}
      zipcode={addressInputs.zipcode}

      onChangeInputs={onChangeInputs}
      onChangeAddressInputs={onChangeAddressInputs}
      onClickImg={onClickImg}
      onChangeFile={onChangeFile}
      fileRef={fileRef}
      imageUrl={imageUrl}
    />
  );

  }


