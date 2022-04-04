// import axios from 'axios'
import { useMutation, gql } from '@apollo/client'
import {useState} from 'react'

const CREAT_BOARD = gql`
        mutation mymutation
        ($writer: String, $title:String , $contents: String){

            createBoard(writer:$writer, title:$title, contents:$contents){
                _id
                number
                message
            }
        }
`
export default function GraphqlMutationPage(){
    const [data, setData] = useState("")
    
    // const [writer, setWriter] = useState("")
    // const [title, setTitle] = useState("")
    // const [contents, setContents] = useState("")

    const [inputs, setInputs] = useState({
        writer:"",
        title:"",
        contents:""
    })

    const [callApi] = useMutation(CREAT_BOARD)

    const callGraphqlAPI = async () =>{
        const result = await callApi({
          variables: {
            // writer: inputs.writer,
            // title: inputs.title,
            // contents: inputs.contents,
            ...inputs
          },
        }); // graphql방식
        console.log(result)
        setData(result.data.createBoard.message)
        // setData(result.data.title)
    }

    const onChangeInputs = (event) => {
        setInputs({
          // writer: inputs.writer,
          // title: inputs.title,
          // contents: inputs.contents,
          ...inputs,
          [event.target.id]: event.target.value,
          // 대괄호로 묶어주면 key로 먼저 변환 => writer되면서 key로 사용 가능
        });
        // setWriter(event.target.value)
    }

    // const onChangeTitle = (event) => {
    //     setInputs({
    //     //   writer: inputs.writer,
    //     //   title: inputs.title,
    //     //   contents: inputs.contents,
    //         ...inputs,
    //       [event.target.id] : event.target.value,
    //     });
    //     // setTitle(event.target.value)
    // }

    // const onChangeContents = (event) => {
    //     setInputs({
    //       //   writer: inputs.writer,
    //       //   title: inputs.title,
    //       //   contents: inputs.contents,
    //       ...inputs,
    //       [event.target.id]: event.target.value,
          
    //     });
    //     // setContents(event.target.value)
    // }

    return (
      <div>
        {/* <div>{data}</div> */}
        작성자 : <input type={"text"} id="writer" onChange={onChangeInputs} />
        <br />
        제목 : <input type={"text"} id="title" onChange={onChangeInputs} />
        <br />
        내용 : <input type={"text"} id="contents" onChange={onChangeInputs} />
        <br />
        {data}
        <br />
        <button onClick={callGraphqlAPI}>GRAPHQL_API요청하기!</button>
      </div>
    ); 
}
