import { MouseEvent } from "react";

// 프리젠터
export interface IBoardListUIProps{
    data:any
    onClickDetail: (event:MouseEvent<HTMLDivElement>) => void
    onClickList: () => void
    id?:any
}
