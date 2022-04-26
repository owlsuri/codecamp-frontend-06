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
    const [files, setFiles] = useState<(File | undefined)[]>([undefined, undefined, undefined])

    const [imageUrls, setImageUrls] = useState(["","",""])
    const [createBoard] = useMutation(CREAT_BOARD);

    const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE)


    const onChangeFile = (number) => (event:ChangeEvent<HTMLInputElement>) =>{
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
                
                const tempUrls = [...imageUrls]
                tempUrls[number] = data.target?.result
                
                setImageUrls(tempUrls)

                const tempFiles= [...files]
                tempFiles[number] = file
                setFiles(tempFiles)
            }
        }        
    }
    
    const onClickSumbit = async() =>{
        // 여기서 uploadFile과 createBoard 묶어서 함
        const results = await Promise.all(
            files.map((el) => el && uploadFile({ variables:{file : el} }))
        )

       const resultUrls =  results.map((el) => el?.data ? el?.data?.uploadFile.url : "")

       console.log(resultUrls)


        // files.map((el) =>{
        //     return el && uploadFile({ variables:{file : el} })

        //     // return el ? uploadFile({ variables:{file : el} }) : undefined


        //     // if(el){
        //     //     return uploadFile({ variables:{file : el} })
        //     // } else{
        //     //     return undefined
        //     // }
        // })


        // const imageUrl= result1.data.uploadFile.url

    
        const result2 = await createBoard({
            variables: { createBoardInput:{
                writer:"qwe",
                password:"1234",
                title:"화요일",
                contents:"이미지 업로드할래",
                images: resultUrls,
            } },
        });
        console.log(result2.data.createBoard._id)

    }

    return(
        <div>
            <input type="file" onChange={onChangeFile(0)}/>
            <input type="file" onChange={onChangeFile(1)}/>
            <input type="file" onChange={onChangeFile(2)}/>
            <img src={imageUrls[0]}/>
            <img src={imageUrls[1]}/>
            <img src={imageUrls[2]}/>
            <button onClick={onClickSumbit}>게시글 등록하기</button>
        </div>
    )
}