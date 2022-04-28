// 마이페이지 & 장바구니
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_POINT_TRANSACTION_OF_LOADING, FETCH_USER_LOGGED_IN } from './mypage.query'
import {withAuth} from '../../../../../src/commons/hocs/withAuth'
import LoginSuccessUI from "./mypage.presenter";
import { useEffect, useState } from "react";
import Head from 'next/head'
import { Modal } from "antd";
import { useRouter } from "next/router";


declare const window: typeof globalThis & {
    IMP:  any
}

function LoginSuccessPage() {
    const router = useRouter()
    const { data } = useQuery(FETCH_USER_LOGGED_IN);
    console.log(data)

    const [ createPointTransactionOfLoading ] = useMutation(CREATE_POINT_TRANSACTION_OF_LOADING)
    // 충전 State
    const [ amount, setAmount ] = useState(100)

  // 충전하기
    const requestPay = () => {
        
        const IMP = window.IMP; // 생략 가능
        IMP.init("imp49910675"); // Example: imp00000000
        
      // IMP.request_pay(param, callback) 결제창 호출
      IMP.request_pay({ // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", 중복되면 안됨 없으면 랜덤으로 생성됨
        name: "seoulOwlPoint",
        amount: amount,
        buyer_email: "suri@suri.com",
        buyer_name: "수리",
        buyer_tel: "010-4242-4242",
        buyer_addr: "코드캠프",
        buyer_postcode: "01181",
        m_redirect_url:'http:localhost:3000/market'
      }, 
       (rsp:any) => { // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
            try{
                const point = createPointTransactionOfLoading({
                    variables : {
                        impUid : rsp.imp_uid,
                    }
                })
                console.log(point)
                Modal.success({ content: "포인트 충전이 완료되었습니다!" });
                router.push('/mypage')
            } catch(error){
            if(error instanceof Error)
                Modal.error({ content: error.message });
            }
          console.log(rsp)
          // 백엔드에 결제 관련 데이터 넘겨주기(-> 뮤테이션 실행하기)
          // ex. createTransactionOfLoading
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다. 다시 시도해주세요.")
        }
      });
    }
    const onChangeOption = (event) => {
        const value = Number(event.target.value)
        setAmount(value)
    }

  // 장바구니 상품
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
  }, []);

  return (
    <>
      <Head>
        {/* <!-- jQuery --> */}
        <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
        {/* <!-- iamport.payment.js --> */}
        <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"></script>
      </Head>
    <LoginSuccessUI
    data={data} 
    basketItems={basketItems}
    onChangeOption={onChangeOption}
    requestPay={requestPay}
    />
  </>
  );
}
export default withAuth(LoginSuccessPage)