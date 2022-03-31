// 게시글 목록 - boards
import { useQuery, gql } from "@apollo/client";
import styled from '@emotion/styled'
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoard($page: Int) {
    fetchBoards(page: $page){
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
    query fetchBoardsCount {
        fetchBoardsCount
    }
`

const MyRow = styled.div`
    display: flex;
`
const MyColumn = styled.div`
    /* width: 100%; */
`


export default function MapBoardPage() {
    const { data, refetch } = useQuery(FETCH_BOARDS)
    const { data:dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT)
    const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)

    const [startPage, setStartPage] = useState(1)

    const onClickPage = (event) =>{
        refetch({page : Number(event.target.id)})   
    }


    const onClickPrevPage = () =>{
        if (startPage === 1) return;
        setStartPage((prev) => prev - 10)
        refetch({page : startPage + 10})
    }
    
    const onClickNextPage = () =>{
        if (startPage + 10 > lastPage) return; 
        setStartPage((prev) => prev + 10)
        refetch({page : startPage - 10})
    }


    console.log(data);

    return (
        <div>
        {/* 조건부 렌더링 : 전체 다 받을때까지 시간이 걸리므로 먼저 보여줄 수 있는 것 먼저 보여줌*/}
        {/* 물음표쓰는 것 optionl-chainning - 내용은 렌더링이랑 같음 */}
        <div>
            {data?.fetchBoards.map((el, index) => (
            <MyRow key={el.number}>
                {/* 키는 고유한 것 */}
                <MyColumn>{el._id.slice(0,4)}</MyColumn>
                <MyColumn> {el.writer}</MyColumn>
                <MyColumn>{el.title}</MyColumn>
                <MyColumn>{index}</MyColumn>
                {/* index는 map이 실행시켜준 순서 */}
                {/* <div>내용 : {el.contents}</div> */}
            </MyRow>
            ))}
            <span onClick={onClickPrevPage}>이전페이지</span>
            {/* JSX안에서 자바스크립트 작성하려면 {} */}
            {
                new Array(10).fill(1).map((_, index) =>
                index + startPage <= lastPage && (
                    <span key={index + startPage}
                         onClick={onClickPage} id={String(index + startPage)}>
                         {' '}{index+startPage }
                    </span>
                )
                )}
            <span onClick={onClickNextPage}>다음페이지</span>
        </div>
        </div>
    );
}
