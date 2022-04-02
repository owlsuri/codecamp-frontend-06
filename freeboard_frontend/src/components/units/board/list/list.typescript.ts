// 게시물 리스트 타입스크립트
import { MouseEvent } from "react"

// 프리젠터
export interface IBoardListUIProps{
    data:any
    onClickDetail: (event:MouseEvent<HTMLDivElement>) => void
    onClickList: () => void
    id?:any
    refetch:any
    lastPage:number
    dataBoardBest:any
    dataBoardsCount:any
}
