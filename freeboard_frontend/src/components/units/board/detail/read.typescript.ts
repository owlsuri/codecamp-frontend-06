// 디테일 타입스크립트
import { MouseEvent } from "react";

// 프레젠터
export interface IBoardReadUIProps {
    data:any
    onClickList: () => void
    onClickMoveEdit: (event:MouseEvent<HTMLButtonElement>) => void
    onClickDelete:() => void
}

