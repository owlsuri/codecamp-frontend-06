import { MouseEvent } from 'react';
// 댓글보기 타입스크립트

export interface ICommentReadUIProps{
    onLoadMore:any
    data: any
    isOpenModal:boolean
    onClickWhoWrite: (event:MouseEvent<HTMLDivElement>) => void
    deleteBoardComment:(event:MouseEvent<HTMLButtonElement>) => void
    ETCH_BOARD_COMMENTS?:any
    onClickOpenModal:(event:MouseEvent<HTMLImageElement>) => void
    onChangeDeletePassword:(event:MouseEvent<SVGSVGElement>) => void
    onClickToEdit:(event:MouseEvent<SVGSVGElement>) => void
    onClickDelete: (event:MouseEvent<SVGSVGElement>) => void
    handleCancel:(event:MouseEvent<HTMLButtonElement>) => void
}

export interface ICommentReadItemProps{
    data:any
    setIsCommentEdit:boolean
    el:any
    isOpenModal:boolean
    onClickDelete:(event:MouseEvent<SVGSVGElement>) => void
    onChangeDeletePassword:(event:MouseEvent<SVGSVGElement>) => void
}
