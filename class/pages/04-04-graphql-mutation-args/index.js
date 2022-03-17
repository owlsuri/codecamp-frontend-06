// import axios from 'axios'
import { useMutation, gql } from '@apollo/client'
import {useState} from 'react'

const CREATE_BOARD = gql`
        mutation{
            createBoard(writer: "철수", title: "제목!!!", contents: "내용"){
                _id
                number
                message
            }
        }
`
export default function GraphqlMutationPage(){
    const [data, setData] = useState("")
    const [callApi] = useMutation(CREATE_BOARD)

    const callGraphqlAPI = async () =>{

        const result = await callApi() 
        console.log(result)
        setData(result.data.createBoard.message)

    }


    return(
    <div>
        <div>{data}</div>
        <button onClick={callGraphqlAPI}>GRAPHQL_API요청하기!</button>
    </div>
    ) 
}