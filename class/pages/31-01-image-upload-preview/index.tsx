import { ChangeEvent, useState } from "react"

export default function ImageUploadPreview(){

    const [imageUrl, setImageUrl] = useState("")


    const onChangeFile = (event:ChangeEvent<HTMLInputElement>) =>{
        const file = event.target.files?.[0]
        if(!file) {
            alert("파일이 없습니다!")
            return
        }

        const fileReader = new FileReader()
        fileReader.readAsDataURL(file) // 파일을 임시 url 형태로 만들어줌 - 미리보기용 

        // 파일 다 읽으면 아래 함수 실행
        fileReader.onload = (data) => {
            if(typeof data.target?.result === "string"){
                console.log(data.target?.result)   // 파일을 문자열 형태로 읽은 결과
                setImageUrl(data.target?.result)
            }
        }

    }

    return(
        <div>
            <input type="file" onChange={onChangeFile}/>
            <img src="imageUrl"/>
        </div>
    )
}