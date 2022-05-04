// 마이페이지 & 장바구니
import {  useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from './mypage.query'
import {withAuth} from '../../../../../src/commons/hocs/withAuth'
import LoginSuccessUI from "./mypage.presenter";
import { useEffect, useState } from "react";


function LoginSuccessPage() {
    const { data } = useQuery(FETCH_USER_LOGGED_IN);
    console.log(data)



  // 장바구니 상품
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
  }, []);

  return (
    <>
    <LoginSuccessUI
    data={data} 
    basketItems={basketItems}
    />
  </>
  );
}
export default withAuth(LoginSuccessPage)