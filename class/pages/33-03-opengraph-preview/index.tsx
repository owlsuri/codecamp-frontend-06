import axios from "axios"

export default function OpengarphPreview(){


    const onClickOpnegraph = async() => {
        // CORS 문제로 안되는 사이트도 있음
        const result = await axios.get("https://www.gmarket.co.kr")
        console.log(result.data)
        console.log(result.data.split("<meta").filter((el) => el.includes("og:")))
    } 

    return(
        <div>
            <h1>사이트 미리보기 연습!!</h1>
            <button onClick={onClickOpnegraph}>미리보기 실행</button>
        </div>
    )
}