import { useQuery } from "@apollo/client";
import { Router, useRouter } from "next/router";
import UsedItemReadUI from "./marketRead.presenter";
import { FETCH_USED_ITEM } from "./marketRead.queries";

export default function UsedItemRead(){

    const router = useRouter()

    const { data } = useQuery(FETCH_USED_ITEM,{
        variables: { useditemId : router.query.useditemId },
    });



    return(
        <UsedItemReadUI
        data={data} />
    )

}