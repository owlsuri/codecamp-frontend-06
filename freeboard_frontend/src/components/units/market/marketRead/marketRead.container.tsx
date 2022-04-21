import { useQuery } from "@apollo/client";
import { Router, useRouter } from "next/router";
import UsedItemReadUI from "./marketRead.presenter";
import { FETCH_USED_ITEM } from "./marketRead.queries";

export default function UsedItemRead(){

    const router = useRouter()

    const { data } = useQuery(FETCH_USED_ITEM,{
        variables: { useditemId : router.query.useditemId },
    });

    const onClickList = () => {
        router.push("/market")
    }

    const onClickDelete = () => {
        
    }

    const onClickMoveEdit = () => {
        router.push(`/market/${router.query.useditemId}/edit`)
    }




    return(
        <UsedItemReadUI
        data={data}
        onClickList={onClickList}
        onClickDelete={onClickDelete}
        onClickMoveEdit={onClickMoveEdit} />
    )

}