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
  // const [updateBoard] = useMutation(UPDATE_BOARD);

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
  const onClickSubmit = async () => {
   
    try {
      const result = await createBoard({
        variables: {
          createBoardInput:{...inputs,
          boardAddress :{...addressInputs},       
          },
        },

      })
        router.push(`/boards/${result.data.createBoard._id}`);
    
      if (inputs.writer === "") {
        setWriterError("작성자를 입력해주세요.");
      }
      if (inputs.password === "") {
        setPasswordError("비밀번호를 입력해주세요.");
      }
      if (inputs.title === "") {
        setTitleError("제목을 입력해주세요.");
      }
      if (inputs.contents === "") {
        setContentsError("내용을 입력해주세요.");
      }
      if (inputs.writer !== "" && inputs.password !== "" && inputs.title !== "" && inputs.contents !== "") {

        Modal.success({
              content: '게시물 등록이 완료되었습니다!',
        });
      }
    } catch (error) {
      if (error instanceof Error){
        Modal.error({
          content: error.message,
          
      });

      console.log(addressInputs)
    }
  }
  };

  // 게시글 수정 버튼
  // const onClickEdit = async (event: MouseEvent<HTMLButtonElement>) => {
  
  //   if (!password) {
  //     setPasswordError("비밀번호를 입력해주세요.")
  //     return;
  //   }
  //   if ((event.target as HTMLButtonElement).value !== "") {
  //     setPasswordError("");
  //   }
  //   if (
  //     !title &&
  //     !contents &&
  //     !youtubeUrl &&
  //     !address &&
  //     !addressDetail &&
  //     !zipcode
  //   ){
  //     Modal.error({
  //       content: "수정한 내용이 없습니다.",
  //     });
  //     return;
  //   }
  
    // const updateBoardInput: IUpdateBoardInput = {};
    // if (title) updateBoardInput.title = title;
    // if (contents) updateBoardInput.contents = contents;
    // if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    // if (zipcode || address || addressDetail) {
    //   updateBoardInput.boardAddress = {};
    //   if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
    //   if (address) updateBoardInput.boardAddress.address = address;
    //   if (addressDetail)
    //     updateBoardInput.boardAddress.addressDetail = addressDetail;
    // }
  
//  try {
//       await updateBoard({
//           variables: {
//             boardId: router.query.boardId,
//             password,
//             updateBoardInput,
//           },
//         });
//         Modal.success({
//             content: '게시물 수정이 완료되었습니다!',
//         });
//         router.push(`/boards/${router.query.boardId}`);
//         } catch (error) {
//           if (error instanceof Error)
//             Modal.error({
//               content: error.message,
//           });
//         }
//         }

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
      // isEdit={props.isEdit}
      // onClickEdit={onClickEdit}
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
    />
  );
}

