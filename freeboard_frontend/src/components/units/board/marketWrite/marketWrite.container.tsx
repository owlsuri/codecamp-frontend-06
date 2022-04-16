import MarketWriteUI from "./marketWrite.presenter";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup";

const schema = yup.object({
itemName: yup
  .string()
  .max(5, "5자 이내로 입력해주세요.")
  .required("작성자는 필수 입력 사항입니다."),
itemDesc: yup
  .string()
  .max(8, "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내 문자열입니다.")
  .required("비밀번호는 필수 입력 사항 입니다."),
item: yup.string().max(100, "100자 이내로 입력해주세요"),
contents: yup.string().max(1000, "100자 이내로 입력해주세요"),
});

export default function MarketWrite(){

  const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
        mode:"onChange"
  });


  const onClickSubmit = (data) => {
    console.log(data);
  };

    return(< MarketWriteUI
    register={register}
    handleSubmit={handleSubmit}
    formState={formState}
    onClickSubmit={onClickSubmit}
    />)
}
