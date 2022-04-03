import { useQuery, gql } from "@apollo/client";
import styled from '@emotion/styled'
import { useState } from "react";

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int) {
        fetchBoards(page:$page){
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
    width: 150px;
`


export default function staticRoutedPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS)
  const [startPage, setStartPage] = useState(1)

  console.log(data);

  const onClickPage = (event) => {
    refetch({page: Number(event.target.id)})
  }

  const onClickPrev = () => {
    setStartPage((prev) => prev-10)
  }

    const onClickNext = () => {
        setStartPage((prev) => prev+10)
    }

  return (
    <div>
        {data?.fetchBoards.map((el, index) => (
          <MyRow key={el._id}>
            <MyColumn>{el._id.slice(0,3)}</MyColumn>
            <MyColumn> {el.writer}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
          </MyRow>
        ))}
        <span onClick={onClickPrev}>이전페이지</span>
           {
            new Array(10).fill(1).map((_, index) => (
                <span key={index+startPage} onClick={onClickPage} id={String(index+startPage)}>{index+startPage}</span>
            ))
        }
        <span onClick={onClickNext}>다음페이지</span>
    </div>
  );
}
