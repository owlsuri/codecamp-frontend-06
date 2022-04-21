import MarketWriteUI from "./marketWrite.presenter";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM, FETCH_USED_ITEM } from "./marketWrite.queries";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useAuth } from "../../../../commons/hooks/useAuth";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ReactQuill = dynamic(() => import("react-quill"), {ssr : false})

const schema = yup.object({
  name: yup
    .string()
    .max(20, "20자 이내로 입력해주세요.")
    .required("필수 입력 사항입니다."),
  remarks: yup.string().max(300, "300자 이내로 입력해주세요").required("필수 입력 사항입니다."),
  contents: yup.string().max(1000, "100자 이내로 입력해주세요").required("필수 입력 사항입니다."),
  price: yup.number().required("필수 입력 사항입니다."),
  tags: yup.string().required("필수 입력 사항입니다.")
});

export default function MarketWrite(props){

  useAuth()
  const router = useRouter()

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
        resolver: yupResolver(schema),
        mode:"onChange"
  });

  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [createUseditem] = useMutation(CREATE_USED_ITEM)
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM)
  const { data } = useQuery(FETCH_USED_ITEM,{
    variables:{ useditemId: router.query.useditemId}
  })


  const onChangeContents = (value) =>{
      setValue("contents", value === "<p><br></p>" ? "" : value);
      trigger("contents")
  }

    const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onClickSubmit = async(data) => {
    if(data.name && data.remarks && data.contents && data.price && data.tags){

    try{
    const result = await createUseditem({
      variables:{ 
        createUseditemInput:{
          name: data.name,
          remarks: data.remarks,
          contents: data.contents,
          price: Number(data.price),
          tags: data.tags,
          images: fileUrls,
        }
      }
    })
               
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

  const onClickUpdate = async() =>{
    // 이미지 수정
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(data.fetchUseditem.images);
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
    if (data.price) updateUseditemInput.price = data.price;
    if (isChangedFiles) updateUseditemInput.images = fileUrls;
    // if (data.zipcode || addressdata.address || addressdata.addressDetail) {
    //   updateUseditemInput.boardAddress = {};
    //   if (addressdata.zipcode) updateUseditemInput.boardAddress.zipcode = addressdata.zipcode;
    //   if (addressdata.address) updateUseditemInput.boardAddress.address = addressdata.address;
    //   if (addressdata.addressDetail)
    //     updateUseditemInput.boardAddress.addressDetail = addressdata.addressDetail;

    try {
      await updateUseditem({
          variables: {
            useditemId: router.query.useditemId,
            password:data.password,
            image: fileUrls,
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
        console.log(fileUrls)
    }

  

//  이미지
  useEffect(() => {
    if (data?.fetchUseditem.images?.length) {
      setFileUrls([...data?.fetchUseditem.images]);
    }
  }, [data]);


    return(< MarketWriteUI
    register={register}
    handleSubmit={handleSubmit}
    formState={formState}
    onClickSubmit={onClickSubmit}
    onChangeContents={onChangeContents}
    ReactQuill={ReactQuill}
    onChangeFileUrls={onChangeFileUrls}
    fileUrls={fileUrls}
    onClickUpdate={onClickUpdate}
    isEdit={props.isEdit}
    />)
}
