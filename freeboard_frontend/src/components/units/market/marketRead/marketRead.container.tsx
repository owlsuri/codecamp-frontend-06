import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import UsedItemReadUI from "./marketRead.presenter";
import { FETCH_USED_ITEM, DELETE_USED_ITEM } from "./marketRead.queries";

export default function UsedItemRead(){

    const router = useRouter()
    const [ isShowQnA, setIsShowQnA ] = useState(false)

    const { data } = useQuery(FETCH_USED_ITEM,{
        variables: { useditemId : router.query.useditemId },
    });

    const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

    const onClickPay = () => {
    }
    
    // 상품디테일 보여주기
    const onClickShowDetail = () => {
        setIsShowQnA(false)
    }

    // QnA보여주기
    const onClickQnA = () => {
        setIsShowQnA(true)
    }


    // 마켓 상품 리스트로 이동
    const onClickList = () => {
        router.push("/market")
    }
    // 삭제하기
    const onClickDelete = async() => {
        try{
        const result = await deleteUseditem({
            variables:{ useditemId : router.query.useditemId }
        })
        Modal.success({
              content: '삭제가 완료되었습니다!',
        });
        router.push(`/market`);
        } catch (error) {
        if(error instanceof Error)
        Modal.error({
          content: error.message,
        });
      }
    }
    // 수정하러 이동
    const onClickMoveEdit = () => {
        router.push(`/market/${router.query.useditemId}/edit`)
    }


    return(
        <UsedItemReadUI
        data={data}
        onClickList={onClickList}
        onClickDelete={onClickDelete}
        onClickMoveEdit={onClickMoveEdit}
        onClickQnA={onClickQnA}
        onClickShowDetail={onClickShowDetail}
        onClickPay={onClickPay}
        isShowQnA={isShowQnA}
        />
    )

}