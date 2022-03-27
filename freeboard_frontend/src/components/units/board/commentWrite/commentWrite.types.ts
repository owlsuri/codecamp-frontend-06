// 댓글 쓰기 타입스크립트
import { ChangeEvent } from "react";

// 컨테이너
export interface ICommentWriteProps{
    isCommentEdit: boolean
}

// 프리젠터
export interface ICommentReadProps{
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeRating: (event: ChangeEvent<HTMLInputElement>) => void
    onClickComment: () => void
    OnClickCommentEdit: () => void
    isActive: boolean
    isCommentEdit: boolean
    data: any
}

export interface IMyVariables{
    boardCommentId: string
    password: string
    updateBoardCommentInput:object
}

export interface ImyUpdateBoardCommentInput{
    contents: string
    rating: number
}