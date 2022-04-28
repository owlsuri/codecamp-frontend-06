import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import UsedItemReadUI from "./marketRead.presenter";
import { FETCH_USED_ITEM, DELETE_USEDITEM, TOGGLE_USEDITEM_PICK, CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING, FETCH_USER_LOGGED_IN } from "./marketRead.queries";


declare const window: typeof globalThis & {
    IMP:  any
}

export default function UsedItemRead(){

    const router = useRouter()

    const { data:userData } = useQuery(FETCH_USER_LOGGED_IN)
    const [ isShowQnA, setIsShowQnA ] = useState(false)
    

    
    const { data } = useQuery(FETCH_USED_ITEM,{
      variables: { useditemId : router.query.useditemId },
    });
    // 결제 state
    // const [ amount, setAmount ] = useState(100)
    // setAmount(data?.fetchUseditem?.price)

    const [createPointTransactionOfBuyingAndSelling] = useMutation(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING)

    const [deleteUseditem] = useMutation(DELETE_USEDITEM);

    const [toggleUsedItemPick] = useMutation(TOGGLE_USEDITEM_PICK);
    
    // 장바구니에 담기
    const [isLoad, setIsLoad] = useState(false)

    const onClickBasket = (el) => () =>{
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]")
    console.log(baskets)

    const temp = baskets.filter((basketEl) => basketEl._id === el._id)

     if(temp.length === 1){
         Modal.error({ content: "이미 장바구니에 담겨있습니다." });
        return 
    }

    const {__typename, ...newEl} = el;
        baskets.push(newEl)
        localStorage.setItem("baskets", JSON.stringify(baskets))
        setIsLoad(true)

        Modal.success({ content: "장바구니에 담았습니다." });

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
    
    // setAmount(data.fetchUseditem.price)
    // 결제하기
    const onClickPay = async() => {
      if(userData?.fetchUserLoggedIn?.userPoint.amount >= data?.fetchUseditem?.price){
         try{
                const pay = await createPointTransactionOfBuyingAndSelling({
                    variables : {
                        useritemId : router.query.useditemId,
                    }
                })
                console.log(pay)
                Modal.success({ content: "결제가 완료되었습니다!" });
            } catch(error){
            if(error instanceof Error)
                Modal.error({ content: error.message });
            }
           } else {
        Modal.error({ content: "충전을 먼저 해주세요" });
        router.push('/mypage')
      }
    }

  // 찜하기
  const onClickPick = async () => {
    try {
      await toggleUsedItemPick({
        variables: { useditemId: String(router.query.useditemId) },
        refetchQueries: [{
                    query: FETCH_USED_ITEM,
                    variables: { useditemId: String(router.query.useditemId) },
                    },
                ],
      });
    } catch (error) {
        if(error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };


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
            onClickBasket={onClickBasket}   
            onClickPick={onClickPick}         
            />
    )

}