import { useQuery, gql } from '@apollo/client'
import styled from '@emotion/styled'
import { IntrospectionQuery } from 'graphql'
import { ChangeEvent, useState } from 'react'
import { IQueryFetchBoardArgs } from '../../src/commons/types/generated/types'
import _ from 'lodash'
import {v4 as uuidv4} from 'uuid'

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
const Search = styled.input`
background-image: url('/ic-58-main-search-black@3x.png');
background-size : 25px;
background-repeat: no-repeat;
padding-left: 30px;
    display: flex;
`

const MyColumn = styled.div`
    width: 300px;
`
interface IProps{
    isMatched : boolean
}

const Word = styled.span`
    color: ${(props:IProps) => (props.isMatched ? "red" : "black")};
`
export default function MapBoardPage(){
    // const [ search, setSearch ] = useState("")
    const { data, refetch } = useQuery<Pick<IntrospectionQuery,"fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS)
    const [keyword, setKeyword] = useState("")

    // const onClickSearch = () => {
    //     refetch({ search, page : 1 })
    //     // 키와 밸류 값이 같으므로 search 하나 지워도 됨. 
    // }

    const getDebounce = _.debounce((data)=>{
        refetch({ search: data, page : 1 })
        setKeyword(data)
    }, 200)

    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        getDebounce(event.target.value)
    }
      const onClickPage = (event) => {
    refetch({page: Number(event.target.id)})
  }


    return (
        <div>
            <Search type="text" onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
            {/* <button onClick={onClickSearch}>검색하기</button> */}

            {data?.fetchBoards.map((el:any) => (
                <MyRow key={el._id}>
                    <MyColumn>{el.writer}</MyColumn>
                    <MyColumn>{el.title.replaceAll(keyword, `#$%${keyword}#$%`)
                                       .split("#$%").map((el)=>(<Word key={uuidv4()} isMatched={ keyword === el}>{el}</Word>))}</MyColumn>
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