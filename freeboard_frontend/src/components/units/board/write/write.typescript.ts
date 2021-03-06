import { ChangeEvent, MouseEvent } from "react";

export interface IBoardWriteProps{
    isEdit:boolean
}

export interface IMyVariables {
  updateBoardInput: object
  password: string
  boardId: any
}

export interface IUpdateBoardInput {
  title?: string
  contents?: string
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
}

// 프리젠터
export interface IBoardWriteUIProps{
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void  // 아무것도 리턴 안할땐 void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void
    onChangePassword:(event: ChangeEvent<HTMLInputElement>) => void
    onChangeYoutube:(event: ChangeEvent<HTMLInputElement>) => void
    onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void
    onClickSubmit: () => void    
    onClickEdit:(event: MouseEvent<HTMLButtonElement>) => void
    writerError: string
    passwordError: string
    contentsError: string
    titleError: string
    isActive: boolean
    isEdit: boolean
    data?: any
    showModal: () => void
    handleOk: () => void
    handleCancel: () => void
    handleComplete: () => void
    isOpen:boolean
    boardAddress?:any
    address?: any
    zipcode?: any
    addressDetail?:string
    

}

// 스타일
export interface IEditButtonProps {
    isActive: boolean
}