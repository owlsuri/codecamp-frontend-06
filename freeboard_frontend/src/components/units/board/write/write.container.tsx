// 게시물 등록하기 & 수정하기 페이지 컨테이너

import { ChangeEvent, MouseEvent, useState, useEffect } from 'react'
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./write.queries";
import { FETCH_BOARD } from '../detail/read.queries'
import BoardWriteUI from './write.presenter';
import {IBoardWriteProps, IUpdateBoardInput} from './write.typescript'
import { Modal } from 'antd';



const initialInputs = {
  writer: "",
  password: "",
  title: "",
  contents: "",
};

export default function BoardWrite(props: IBoardWriteProps) {

  const [inputs, setInputs] = useState(initialInputs);
  const [youtubeUrl, setYoutubeUrl] = useState("")
  const [inputErrors, setInputErrors] = useState(initialInputs);
  const [fileUrls, setFileUrls] = useState(["", "", ""])

  const [addressInputs, setAddressInputs] = useState({
    address:"",
    zipcode:"",
    addressDetail:""
  });

  


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

  // writer, password, title, contents 입력받기
  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
      setInputs({
        ...inputs,
        [event.target.id]: event.target.value,
      })

    const newInputs = {
      ...inputs,
      [event.target.id]: event.target.value,
    };

    // 버튼 활성화
    const isActive = Object.values(newInputs).every((el) => el);
    setIsActive(isActive);
  };

  // youtube input
  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };

  // 주소디테일 input
  const onChangeAddressInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressInputs({ ...addressInputs, addressDetail : event.target.value });
  };


   // 이미지 등록하기
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newImageUrl = [...fileUrls];
    newImageUrl[index] = fileUrl;
    setFileUrls(newImageUrl);
  };

  // 등록하기 버튼
  const onClickSubmit = async (event:MouseEvent<HTMLButtonElement>) => {
   setInputErrors({
      writer: inputs.writer ? "" : "작성자를 입력해주세요.",
      password: inputs.password ? "" : "비밀번호를 입력해주세요.",
      title: inputs.title ? "" : "제목을 입력해주세요.",
      contents: inputs.contents ? "" : "내용을 입력해주세요.",
    });

    if(inputs.writer && inputs.title && inputs.contents && inputs.password){
    if (Object.values(inputs).every((el) => el)) {
      try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            ...inputs,
            youtubeUrl,
            boardAddress: {
              ...addressInputs,
            },
            images: fileUrls,
          },
        },
      });
        router.push(`/boards/${result.data.createBoard._id}`);
        console.log(result)
    
      if (event.target.value){
        setInputErrors((prev) => ({ ...prev, [event.target.id]: "" }));
      }
        Modal.success({
              content: '게시물 등록이 완료되었습니다!',
        });
        console.log(result)
    } catch (error) {
      if (error instanceof Error){
        Modal.error({
          content: error.message, 
      });
    }
  }}};
  }
  
 

  // 게시글 수정 버튼
  const onClickEdit = async () => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(data.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    if (
      !inputs.title &&
      !inputs.contents &&
      !youtubeUrl &&
      !addressInputs.address &&
      !addressInputs.addressDetail &&
      !addressInputs.zipcode &&
      !isChangedFiles
    ){
      Modal.error({
        content: "수정한 내용이 없습니다.",
      });
      return;
    }
  
    const updateBoardInput: IUpdateBoardInput = {};
    if (inputs.title) updateBoardInput.title = inputs.title;
    if (inputs.contents) updateBoardInput.contents = inputs.contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    if (isChangedFiles) updateBoardInput.images= fileUrls;
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

  useEffect(() => {
    if (data?.fetchBoard.images?.length) {
      setFileUrls([...data?.fetchBoard.images]);
    }
  }, [data]);


  return (
    <BoardWriteUI

      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onClickSubmit={onClickSubmit}
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
      inputErrors={inputErrors}

      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
    />
  );
  }


