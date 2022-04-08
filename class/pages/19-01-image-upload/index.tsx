import { ChangeEvent, useState } from "react"
import { gql, useMutation } from "@apollo/client"
import { IMutation, IMutationUploadFileArgs } from "../../src/commons/types/generated/types"
import Modal from "antd/lib/modal/Modal"

    const UPLOAD_FILE = gql`
        mutation uploadFile($file:Upload!){
            uploadFile(file:$file){
                url
            }
        }
    `


export default function ImageValiPage(){
    const [imageUrl, setImageUrl] = useState<string | undefined>("")
    const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE)


    const onChangeFile = async (event:ChangeEvent<HTMLInputElement>) =>{
        const file = event.target.files?.[0]
        console.log(file)
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