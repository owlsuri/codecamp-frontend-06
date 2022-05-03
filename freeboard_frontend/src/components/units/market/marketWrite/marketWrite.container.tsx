import MarketWriteUI from "./marketWrite.presenter";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM, FETCH_USED_ITEM, UPLOAD_FILE } from "./marketWrite.queries";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useAuth } from "../../../../commons/hooks/useAuth";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { ChangeEvent, useEffect, useState } from "react";
import { IMutation, IMutationUploadFileArgs } from "../../../../commons/types/generated/types";

const ReactQuill = dynamic(() => import("react-quill"), {ssr : false});

const schema = yup.object({
  name: yup
    .string()
    .max(20, "20자 이내로 입력해주세요.")
    .required("필수 입력 사항입니다."),
  remarks: yup.string().max(300, "300자 이내로 입력해주세요").required("필수 입력 사항입니다."),
  contents: yup.string().max(1000, "100자 이내로 입력해주세요").required("필수 입력 사항입니다."),
  price: yup.string().required("숫자만 입력해주세요."),
  // tags: yup.string().required("필수 입력 사항입니다.")
});

export default function MarketWrite(props){

  useAuth();
  const router = useRouter();
  
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  // const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE)
  const { data } = useQuery(FETCH_USED_ITEM,{
    variables:{ useditemId: router.query.useditemId}
  });
  console.log(data)
  
    // 이미지 업로드 스테이트
      // const [files, setFiles] = useState<(File | undefined)[]>([undefined, undefined, undefined])
      // const [imageUrls, setImageUrls] = useState(["","",""])
      const [fileUrls, setFileUrls] = useState(["", "", ""]);
 
  // 해시태그
  const [hashtag, setHashtag] = useState("");
  const [hashArr, setHashArr] = useState([]);
  const onKeyUpHash = (event) => {
    // 자바스크립트 키코드

    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashArr([...hashArr, "#" + event.target.value]);

      event.target.value = "";
    }
    console.log(event.target.value);
  };



  const { register, handleSubmit, formState, setValue, trigger, reset, getValues } = useForm({
        resolver: !props.isEdit && yupResolver(schema),
        mode:"onChange",   
  });

  const onChangeContents = (value: any) =>{
      setValue("contents", value === "<p><br></p>" ? "" : value);
      trigger("contents");
  };

  // 이미지 등록하기
    const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  // 이미지 업로드
  //   const onChangeFile = (number) => (event:ChangeEvent<HTMLInputElement>) =>{
  //     const file = event.target.files?.[0]
  //     if(!file) {
  //         alert("파일이 없습니다!")
  //         return
  //     }

  //   const fileReader = new FileReader()
  //     fileReader.readAsDataURL(file) // blob 파일을 임시 url 형태로 만들어줌 - 미리보기용 

  //     // 파일 다 읽으면 아래 함수 실행
  //     fileReader.onload = (data) => {
  //         if(typeof data.target?.result === "string"){
              
  //             const tempUrls = [...imageUrls]
  //             tempUrls[number] = data.target?.result
              
  //             setImageUrls(tempUrls)

  //             const tempFiles= [...files]
  //             tempFiles[number] = file
  //             setFiles(tempFiles)
  //         }
  //     }        
  // }

  const onClickSubmit = async(data:any) => {
    if(data.name && data.remarks && data.contents && data.price && data.tags){
      
      try{
      // 이미지
      //   const results = await Promise.all(
      //       files.map((el) => el && uploadFile({ variables:{file : el} }))
      //   )
      //  const resultUrls =  results.map((el) => el?.data ? el?.data?.uploadFile.url : "")
      //  console.log(resultUrls)


    // 등록하기
    const result = await createUseditem({
      variables:{ 
        createUseditemInput:{
          name: data.name,
          remarks: data.remarks,
          contents: data.contents,
          price: Number(data.price),
          tags: hashArr,
          images: fileUrls,
          useditemAddress: {
              zipcode: data.zipcode,
              address: data.address,
              addressDetail: data.addressDetail,
            },
        }
      }
    })
     console.log(result)     
     Modal.success({
                content: '상품 등록 성공!',
            });
          
    router.push(`/market/${result.data.createUseditem._id}`);
    console.log(result);
          
  }catch(error){
        if(error instanceof Error)
        Modal.error({
                content: error.message,
            });
    }
  }
 }
// 수정하기
  const onClickUpdate = async(data) =>{
    // 이미지 수정
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(data?.fetchUseditem?.images);
    const isChangedFiles = currentFiles !== defaultFiles;
    if (
      !data.name &&
      !data.remarks &&
      !data.contents &&
      !data.price &&
      !isChangedFiles
    ){
      Modal.error({
        content: "수정한 내용이 없습니다.",
      });
    }

  const updateUseditemInput = {};
    if (data.name) updateUseditemInput.name = data.name;
    if (data.remarks) updateUseditemInput.remarks = data.remarks;
    if (data.contents) updateUseditemInput.contents = data.contents;
    if (data.price) updateUseditemInput.price = Number(data.price);
    if (isChangedFiles) updateUseditemInput.images = fileUrls;
    if (hashArr) updateUseditemInput.tags = hashArr;


    try {
      await updateUseditem({
          variables: {
            useditemId: router.query.useditemId,
            updateUseditemInput,
          },
        });
        Modal.success({
            content: '게시물 수정이 완료되었습니다!',
        });
        router.push(`/market/${router.query.useditemId}`);
  } catch (error) {
          if (error instanceof Error)
            Modal.error({
              content: error.message,
          });
        }
    }

  

//  이미지
  useEffect(() => {
    if (data?.fetchUseditem.images?.length) {
      setFileUrls([...data?.fetchUseditem.images]);
    }
    if (data?.fetchUseditem.tags?.length) {
      setHashArr([...data?.fetchUseditem.tags]);
    }
  }, [data]);

  // 해시태그 삭제
  const onClickDeleteHash = (event) => {
    hashArr.splice(Number(event.target.id), 1);
    setHashArr([...hashArr]);
  };





    return(< MarketWriteUI
    register={register}
    handleSubmit={handleSubmit}
    formState={formState}
    onClickSubmit={onClickSubmit}
    onChangeContents={onChangeContents}
    ReactQuill={ReactQuill}
    onChangeFileUrls={onChangeFileUrls}
    onClickUpdate={onClickUpdate}
    isEdit={props.isEdit}
    fileUrls={fileUrls}
    getValues={getValues}
    reset={reset}
    data={data}
    hashArr={hashArr}
    onKeyUpHash={onKeyUpHash}
    onClickDeleteHash={onClickDeleteHash}
    />)
}
