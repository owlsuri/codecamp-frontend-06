import {useState} from 'react'

export default function CounterStatePage(){
    
    function counter(){
        const [count, setCount] = useState(0)
        setCount(count + 1)
    }

    
    return (
        <div>
            <div>{count}</div>
            <button onClick={counter}>카운트 올리기!</button>
        </div>
    )
}
//let은 변수에 다시 담아주는 기능이 없다.
//스코프체인 중괄호안에서 먼저 찾고, 없으면 밖으로 나가서 찾는다.