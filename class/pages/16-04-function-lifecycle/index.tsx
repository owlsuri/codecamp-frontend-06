import { useEffect, useRef, useState } from "react";
import {useRouter} from 'next/router'


export default function CounterPage() {
    // inputRef = createRef<HTMLInputElement>();
    const inputRef = useRef<HTMLInputElement>(null);

    const [count, setCount] = useState(0)
    const router=useRouter();

    
    // 1. DidMount
    // componentDidMount(){
    //     console.log("마운트됨")
    //     this.inputRef.current?.focus()
    //  // 포커스 깜빡깜빡
    // }
    // useEffect(()=>{
    //     console.log("마운트됨!!")
    //     inputRef.current?.focus()
    // },[])

    // 2. DidUpdate
    // componentDidUpdate(){
    //     console.log("수정되고 다시그려짐")
    // }
    useEffect(()=>{
        console.log("수정되고 다시그려짐")
        inputRef.current?.focus()
    }) // 대괄호 유무 차이 -  대괄호는 의존성 배열(Dependency Array) : 의존성배열이 비어있으면 한번만 실행되고 끝. 의존성 배열에 count가 들어가 있으면 count가 변경될 때 실행. 없으면 한번실행 끝
    // 3.WillUnMount
    // componentWillUnmount(){
    //     console.log("컴포넌트 사라짐")
    //     // 채팅방 나가기
    //     // api 요청
    // }
    // useEffect(()=>{
    //     return () =>{
    //         console.log("컴포넌트 사라짐")
    //     }
    // },[]) 

    // 4. DidMount와 WillUnMount 를 합치기
    useEffect(()=>{
        console.log("마운트됨!!")
        inputRef.current?.focus()

        return () =>{
            console.log("컴포넌트 사라짐")
        }
    },[])

    // 5. useEffect의 잘못된 사용 예(1. 추가랜더링) - setState하면 불필요한 랜더링이 일어남
    useEffect(()=>{
        setCount(10)
    },[])

    // 5. useEffect의 잘못된 사용 예(2. 무한루프) - 계속 다시 그려짐...
    // useEffect(()=>{
    //     setCount(prev => prev + 1)
    // },[count])

    const onClickCounter = () => {
        setCount((prev) => prev+1)
    }


    const onClickMove = () => {
        router.push("/")
    }

    console.log("나는 언제실행됨????")
    // 컴포넌트가 마운트되고나서 useEffect 실행되기때문에 이것이 가장 먼저 실행됨

        return(
            <div>
                <input type="text" ref={inputRef}/>
                <div>현재카운트 : {count}</div>
                <button onClick={onClickCounter}>카운트 올리기!!</button>
                <button onClick={onClickMove}>나가기!!</button>
            </div>
        ) 

}