import axios from "axios"
import { useEffect, useState } from "react"

export default function OpenapiWithWuseEffect(){

    const [dogUrl, setDogUrl] = useState("")

    
    useEffect(()=>{
        // async 쓰기위해 임의함수 만들어줌
        const aaa = async () => {
            const result = await axios.get("https://dog.ceo/api/breeds/image/random")
            setDogUrl(result.data.message) 
        }
        aaa()
    },[])

    return(
        <div>
            <div>오픈API연습</div>
            <img src={dogUrl}/>
        </div>
    )
}