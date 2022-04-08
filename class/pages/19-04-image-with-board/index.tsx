// import axios from 'axios'
import { useMutation, gql } from '@apollo/client'
import { ChangeEvent, useRef, useState } from "react"
import { IMutation, IMutationUploadFileArgs } from "../../src/commons/types/generated/types"
import Modal from "antd/lib/modal/Modal"
import { CheckFileValidation } from '../../src/commons/libraries/validation'

const CREAT_BOARD = gql`
        mutation createBoard($createBoardInput:CreateBoardInput!){
            createBoard(createBoardInput: $createBoardInput){
                _id
                writer
                title
                contents
                images
            }
        }
`

const UPLOAD_FILE = gql`
    mutation uploadFile($file:Upload!){
        uploadFile(file:$file){
            url
        }
    }
`


export default function GraphqlMutationPage(){
    const [data, setData] = useState("")

    const [writer, setWriter] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const [imageUrl, setImageUrl] = useState<string | undefined>("")
    const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE)
    const fileRef = useRef<HTMLInputElement>(null)

    const [callApi] = useMutation(CREAT_BOARD)

    const callGraphqlAPI = async () =>{
        const result = await callApi({
            variables: {createBoardInput:{
                writer,
                password,
                title,
                contents,
                images: [imageUrl],
            },
        },
    }) 
        console.log(result)
        setData(result.data.createBoard.message)
        alert("등록이 완료되었습니다!")
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
    }

    const onClickImg = () => {
        fileRef.current?.click()
    }

        const onChangeFile = async (event:ChangeEvent<HTMLInputElement>) =>{
        const file = event.target.files?.[0]
        console.log(file)

        const isValid = CheckFileValidation(file) 
        if(!isValid) return;


        try{
            const result = await uploadFile({
                variables:{file}
            })
    
            console.log(result.data?.uploadFile.url)
    
            setImageUrl(result.data?.uploadFile.url)

        } catch(error){
            Modal.error({
                content: error.message
            });
            
        }
    }

    return(
        <div>
                작성자 : <input type={'text'} onChange={onChangeWriter}/><br/>
                비밀번호 : <input type={'password'} onChange={onChangePassword}/><br/>
                제목 : <input type={'text'} onChange={onChangeTitle}/><br/>
                내용 : <input type={'text'} onChange={onChangeContents}/><br/>
                <div style={{width:"80px", height:"30px", backgroundColor:"gray"}} onClick={onClickImg}>
                    이미지선택
                </div>
                <div>
                    <input style={{display:"none"}} type="file" onChange={onChangeFile} ref={fileRef} /> 
                    {/* multiple 속성주면 한번에 여러개 */}
                </div>
                <img width="300px" src={`https://storage.googleapis.com/${imageUrl}`} />

         
            <button onClick={callGraphqlAPI}>GRAPHQL_API요청하기!</button>
        </div>
    ) 
}
