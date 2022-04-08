import { useQuery, gql } from '@apollo/client'
import styled from '@emotion/styled'
import { IntrospectionQuery } from 'graphql'
import { ChangeEvent, useState } from 'react'
import { IQueryFetchBoardArgs } from '../../src/commons/types/generated/types'

const FETCH_BOARDS = gql`
    query fetchBoards($search:String, $page:Int){
        fetchBoards(search:$search, page:$page){
            _id
            writer
            title
            contents
        }
    }
`

const MyRow = styled.div`
    display: flex;
`

const MyColumn = styled.div`
    width: 300px;
`
export default function MapBoardPage(){
    const [ search, setSearch ] = useState("")
    const { data, refetch } = useQuery<Pick<IntrospectionQuery,"fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS)

    const onClickSearch = () => {
        refetch({ search, page : 1 })
        // 키와 밸류 값이 같으므로 search 하나 지워도 됨. 
    }

    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }
      const onClickPage = (event) => {
    refetch({page: Number(event.target.id)})
    
  }

    return (
        <div>
            검색어 입력 : <input type="text" onChange={onChangeSearch}/><button onClick={onClickSearch}>검색하기</button>
            {data?.fetchBoards.map((el:any) => (
                <MyRow key={el._id}>
                    <MyColumn>{el.writer}</MyColumn>
                    <MyColumn>{el.title}</MyColumn>
                </MyRow>
            ))}
                       {
            new Array(10).fill(1).map((_, index) => (
                <span key={index+1} onClick={onClickPage} id={String(index+1)}>{index+1}</span>
            ))
        }
        </div>
    )

}