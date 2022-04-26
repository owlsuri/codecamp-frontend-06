import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react"

    const UPLOAD_FILE = gql`
        mutation uploadFile($file:Upload!){
            uploadFile(file:$file){
                url
            }
        }
    `
    
 const CREAT_BOARD = gql`
  mutation createBoard($createBoardInput:CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;


export default function ImageUploadPreview(){
    const [file1, setFile1] = useState<File>()

    const [imageUrl, setImageUrl] = useState("")
    const [createBoard] = useMutation(CREAT_BOARD);

    const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE)


    const onChangeFile = (event:ChangeEvent<HTMLInputElement>) =>{
        const file = event.target.files?.[0]
        if(!file) {
            alert("파일이 없습니다!")
            return
        }

        const fileReader = new FileReader()
        fileReader.readAsDataURL(file) // blob 파일을 임시 url 형태로 만들어줌 - 미리보기용 

        // 파일 다 읽으면 아래 함수 실행
        fileReader.onload = (data) => {
            if(typeof data.target?.result === "string"){
                console.log(data.target?.result)   // 파일을 문자열 형태로 읽은 결과
                setImageUrl(data.target?.result)
                setFile1(file)
            }
        }        
    }
    
    const onClickSumbit = async() =>{
        // 여기서 uploadFile과 createBoard 묶어서 함

        const result1 = await uploadFile({
                variables:{file : file1}
            })

        const imageUrl= result1.data.uploadFile.url

    
        const result2 = await createBoard({
            variables: { createBoardInput:{
                writer:"수리",
                password:"1234",
                title:"화요일",
                contents:"이미지 업로드할래",
                images:[imageUrl]
            } },
        });
        console.log(result2.data.createBoard._id)

    }

    return(
        <div>
            <input type="file" onChange={onChangeFile}/>
            <img src={imageUrl}/>
            <button onClick={onClickSumbit}>게시글 등록하기</button>
        </div>
    )
}