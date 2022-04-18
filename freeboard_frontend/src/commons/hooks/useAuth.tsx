import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export function useAuth(){
    // use 가 들어있는 것들 함수명 use 넣어주기

     const router = useRouter()
    // const [ isLoading, setIsLoading ] = useState(true)

    // 권한 분기 로직 추가하기
        useEffect(()=>{
        if(!localStorage.getItem("accessToken")){
            alert("로그인 후 이용이 가능 합니다!")
            router.push("/login")
        }
    }, [])

    // return {
    //     isLoading
    //     // 키 밸류가 같으므로 생략
    // }
}