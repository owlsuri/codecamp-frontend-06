import { ChangeEvent, useState } from "react"
import { gql, useMutation } from "@apollo/client"
import { IMutation, IMutationUploadFileArgs } from "../../src/commons/types/generated/types"
import Modal from "antd/lib/modal/Modal"
import { FileWordFilled } from "@ant-design/icons"
import { CheckFileValidation } from '../../src/commons/libraries/validation'

    const UPLOAD_FILE = gql`
        mutation uploadFile($file:Upload!){
            uploadFile(file:$file){
                url
            }
        }
    `


export default function ImageValidationPage(){
    const [imageUrl, setImageUrl] = useState<string | undefined>("")
    const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE)


    const onChangeFile = async (event:ChangeEvent<HTMLInputElement>) =>{
        const file = event.target.files?.[0]
        console.log(file)
        // 이미지 검증
        const isValid = CheckFileValidation(file) 
        if(!isValid) return;
        // src로 이동
        // if(!file?.size){
        //     alert("파일이 없습니다")
        //     return
        // }
        // if(file.size > 5*1024*1024){
        //     alert("파일 용량이 너무 큽니다. (제한:5MB)")
        //     return
        // }

        // if(!file.type.includes("jpeg") && !file.type.includes("png")){
        //     alert("jpeg 또는 png 파일만 업로드 가능합니다")
        //     return
        // }




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
            <div>이미지업로드 연습</div>
            <div>
                <input type="file" onChange={onChangeFile} /> 
                {/* multiple 속성주면 한번에 여러개 */}
            </div>
            <img width="300px" src={`https://storage.googleapis.com/${imageUrl}`} />
        </div>
    )
}