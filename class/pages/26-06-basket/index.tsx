// 게시글 목록 - boards
import { gql, useQuery } from "@apollo/client";
import styled from '@emotion/styled'
import { IBoard } from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards{
      _id
      writer
      title
      contents
    }
  }
`;

const MyRow = styled.div`
    display: flex;
`
const MyColumn = styled.div`
    width: 25%;
`


export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS)

  const onClickBasket = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]")
    console.log(baskets) 
    const temp = baskets.filter((basketEl:IBoard) => basketEl._id === el._id)
    if(temp.length === 1){
        alert("이미 장바구니에 담겨있습니다")
        return 
    }

    const {__typename, ...newEl} = el;
    baskets.push(newEl)
    localStorage.setItem("baskets", JSON.stringify(baskets))
  }

  console.log(data);

  return (
    <div>
      <div>
        {data?.fetchBoards.map((el:IBoard) => (
          <MyRow key={el._id}>
            <MyColumn> {el.writer}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
            <button onClick={onClickBasket(el)}>장바구니담기</button>
          </MyRow>
        ))}
      </div>
    </div>
  );
}
