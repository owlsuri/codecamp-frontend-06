import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { withAuth } from "../../src/components/commons/hocs/withAuth"

    const FETCH_USER_LOGGED_IN = gql`
        query fetchUserLoggedIn{
                fetchUserLoggedIn{
                    email
                    name
                }
        }
    `

function LoginSuccessPage(){

    const { data } = useQuery(FETCH_USER_LOGGED_IN)
    // const router = useRouter()

    // useEffect(()=>{
    //     if(!localStorage.getItem("accessToken")){
    //         alert("로그인 후 이용이 가능 합니다!")
    //         router.push("/23-04-login-check")
    //     }
    // }, [])

    return(
        <div>
            {data?.fetchUserLoggedIn.name}님 환영합니다!!
        </div>
    )

}export default withAuth(LoginSuccessPage)
// 앞으로 로그인이 필요한 페이지는 앞에 withAuth만 붙여주면 됨