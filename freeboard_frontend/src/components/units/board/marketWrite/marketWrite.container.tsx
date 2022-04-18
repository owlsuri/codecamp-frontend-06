import MarketWriteUI from "./marketWrite.presenter";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM } from "./marketWrite.queries";

// const schema = yup.object({
// itemName: yup
//   .string()
//   .max(20, "20자 이내로 입력해주세요.")
//   .required("필수 입력 사항입니다."),
// itemDesc: yup
//   .string()
//   .max(8, "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내 문자열입니다.")
//   .required("비밀번호는 필수 입력 사항 입니다."),
// item: yup.string().max(100, "100자 이내로 입력해주세요"),
// contents: yup.string().max(1000, "100자 이내로 입력해주세요"),
// });

export default function MarketWrite(){

  const { register, handleSubmit, formState } = useForm({
        // resolver: yupResolver(schema),
        mode:"onChange"
  });

  const [createUsedItem] = useMutation(CREATE_USED_ITEM)


  const onClickSubmit = async(data) => {
console.log(data)
    const result = await createUsedItem({
      variables:{ 
        createUseditemInput:{
          name: data.itemName,
          remarks: data.item,
          contents: data.desc,
          price: data.price,
          tags: data.tag,
        }
      }
    })

    console.log(result);
  };

    return(< MarketWriteUI
    register={register}
    handleSubmit={handleSubmit}
    formState={formState}
    onClickSubmit={onClickSubmit}
    />)
}
