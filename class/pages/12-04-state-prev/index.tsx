import { useState } from "react"

export default function StatePrevPage(){
    const [count, setCount] = useState(0)

    const onClickCount = () =>{
        setCount((prev) => (prev+1))
        setCount((prev) => (prev+1))
        setCount((prev) => (prev+1))
        setCount((prev) => (prev+1))

        // prev가 있으면 임시저장공간에 있는 값을 가져온다. 그값에 계속 1을 더하므로 4씩 증가되어 츨력된다. 
        // prev가 없으면 setCount가 4개 있어도 count의 현재값이 0이므로, 그리고 함수가 끝나야 값을 그리므로 1씩만 증가한다.
    }
    return(
        <div>
            <div>현재카운트 : {count}</div>
            <button onClick={onClickCount}>카운트 올리기</button>
        </div>
    )
}