// import axios from 'axios'
import { useMutation, gql } from '@apollo/client'
import {useState} from 'react'

const CREAT_BOARD = gql`
        mutation createBoard($writer:String!, $title:String, $contents:String) {


            createBoard(writer: $writer, title: $title, contents: $contents){
                _id
                number
                message
            }
        }
`
export default function GraphqlMutationPage(){
    const [data, setData] = useState("")
    const [callApi] = useMutation(CREAT_BOARD)

    const callGraphqlAPI = async () =>{
        // const result = await axios.get('https://koreanjson.com/posts/1') - restAPI방식
        const result = await callApi({
            variables: {writer: "철수", title: "제목!!!", contents: "내용"}
        }) //graphql방식
        console.log(result)
        setData(result.data.createBoard.message)
        // setData(result.data.title)
    }


    return(
    <div>
        <div>{data}</div>
        <button onClick={callGraphqlAPI}>GRAPHQL_API요청하기!</button>
    </div>
    ) 
}