// import axios from 'axios'
import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'

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
    const router = useRouter()

    const [data, setData] = useState("")

    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const [callApi] = useMutation(CREAT_BOARD)

    //가져오기를 시도하는 것
    
        const callGraphqlAPI = async () => {
        try{
            const result = await callApi({
            variables: { writer: writer, title: title, contents: contents },
            }); //try는여기서 실패하면 catch로 점프한다.
            console.log(result);
            setData(result.data.createBoard.message);
            alert("게시글 등록 성공!");
            alert("상세페이지로 이동할까요?");
            // 백틱안에 쓸땐 변수앞에 $를 붙인다. 템플릿 리터럴
            router.push(`/05-08-dynamic-routed-input/${result.data.createBoard.number}`)
        }catch(error){
        alert(error.message)
    } 
}

    //finally{
    //     //성공이든 실패든 여기 finally는 실행 : 로그남김(데이터분석에 쓰임)
    // }


    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
    }

    return (
      <div>
        {/* <div>{data}</div> */}
        작성자 : <input type={"text"} onChange={onChangeWriter} />
        <br />
        제목 : <input type={"text"} onChange={onChangeTitle} />
        <br />
        내용 : <input type={"text"} onChange={onChangeContents} />
        <br />
        {data}
        <br />
        <button onClick={callGraphqlAPI}>GRAPHQL_API요청하기!</button>
      </div>
    ); 
}
