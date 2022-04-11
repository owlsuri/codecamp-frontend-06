import { useEffect } from "react";
import { useRecoilState } from "recoil";
import GlobalStateContainer from "../../src/components/units/board/21-global-state/boardWrite.container";
import { isEditState } from "../../src/commons/store";

export default function GlobalStatePage(){

    const [isEdit, setIsEdit] = useRecoilState(isEditState)

    useEffect(()=>{
        setIsEdit(true)
    },[])

    return(
        <GlobalStateContainer />

    )
}