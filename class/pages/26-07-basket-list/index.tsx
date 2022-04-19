// 게시글 목록 - boards
import styled from '@emotion/styled'
import { useEffect, useState } from "react";
import { IBoard } from '../../src/commons/types/generated/types';


const MyRow = styled.div`
    display: flex;
`
const MyColumn = styled.div`
    width: 25%;
`


export default function BasketPage() {

  const [basketItems, setBasketItems] = useState([])

  useEffect(()=>{
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]")
    console.log(baskets)
    setBasketItems(baskets)
    console.log(basketItems)
  },[])


  return (
    <div>
      <div>
        {basketItems?.map((el:IBoard) => (
          <MyRow key={el._id}>
            <MyColumn> {el.writer}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
          </MyRow>
        ))}
      </div>
    </div>
  );
}
