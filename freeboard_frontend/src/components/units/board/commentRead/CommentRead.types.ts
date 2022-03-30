import { MouseEvent } from 'react';
// 댓글보기 타입스크립트

// 프리젠터

export interface ICommentReadUIProps{
    data:any
    onClickToEdit:(event:MouseEvent<HTMLButtonElement>) => void
    onClickDelete: (event:MouseEvent<HTMLButtonElement>) => void
    onClickWhoWrite: (event:MouseEvent<HTMLButtonElement>) => void
}
