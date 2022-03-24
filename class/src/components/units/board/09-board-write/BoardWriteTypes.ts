import { ChangeEvent } from "react";
//스타일즈 타입

export interface ISubmitButtonProps{
  isActive: boolean
}

//프리젠터 타입
export interface IBoardWriteUIProps{
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void  //아무것도 리턴 안할땐 void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
    callGraphqlAPI: () => void
    onClickUpdate: () => void
    isActive:boolean
    isEdit:boolean
    data?:any
}

//컨테이너 타입
    export interface IMyVariables{
      number: number
      writer?: string
      title?: string
      contents?: string
    }

   export interface IBoardWriteProps{
  isEdit: boolean
  data?:any
}