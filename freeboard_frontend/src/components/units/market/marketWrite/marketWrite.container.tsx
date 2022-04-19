import MarketWriteUI from "./marketWrite.presenter";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM } from "./marketWrite.queries";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useAuth } from "../../../../commons/hooks/useAuth";

// const schema = yup.object({
//   name: yup
//     .string()
//     .max(20, "20자 이내로 입력해주세요.")
//     .required("필수 입력 사항입니다."),
//   remarks: yup.string().max(300, "300자 이내로 입력해주세요").required("필수 입력 사항입니다."),
//   contents: yup.string().max(1000, "100자 이내로 입력해주세요").required("필수 입력 사항입니다."),
//   price: yup.number().required("필수 입력 사항입니다."),
//   tag: yup.string().required("필수 입력 사항입니다.")
// });

export default function MarketWrite(){

  useAuth()

  const { register, handleSubmit, formState } = useForm({
        // resolver: yupResolver(schema),
        mode:"onChange"
  });

  const [createUseditem] = useMutation(CREATE_USED_ITEM)
  const router = useRouter()

  const onClickSubmit = async(data) => {

    try{
    const result = await createUseditem({
      variables:{ 
        createUseditemInput:{
          name: data.name,
          remarks: data.remarks,
          contents: data.contents,
          price: Number(data.price),
          tags: data.tags,
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
    return(< MarketWriteUI
    register={register}
    handleSubmit={handleSubmit}
    formState={formState}
    onClickSubmit={onClickSubmit}
    />)
}
