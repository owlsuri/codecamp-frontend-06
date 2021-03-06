import { useMutation, gql, useApolloClient } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"
import { useRecoilState } from "recoil"
import { accessTokenState, userInfoState } from "../../src/commons/store"

const LOGIN_USER = gql`
    mutation loginUser($email:String!, $password:String!){
        loginUser(email:$email, password:$password){
            accessToken
        }
    }
`
const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn{
            fetchUserLoggedIn{
                email
                name
            }
    }
`

export default function LoginPage(){
    const [accessToken, setAccesstoken] = useRecoilState(accessTokenState)
    const [userInfo, setUserInfo] = useRecoilState(userInfoState)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginUser] = useMutation(LOGIN_USER)
    const router = useRouter()

    const client = useApolloClient()

    const onChangeEmail =(event)=>{
        setEmail(event.target.value)
    }
    const onChangePassword =(event)=>{
        setPassword(event.target.value)
    }

    const onClickLogin = async() => {

        // 1. 로그인하기
        const result = await loginUser({
            variables:{
                email,
                password
            },
        })
        const accessToken = result.data.loginUser.accessToken
        console.log(accessToken)

        // 2. 유저정보 받아오기
        const resultUserInfo = await client.query({
            query : FETCH_USER_LOGGED_IN,
            // 특정 http 보내고 싶을때
            context:{
                headers:{
                    Authorization : `Bearer ${accessToken}`
                },
            },
        })

        const userInfo = resultUserInfo.data.fetchUserLoggedIn
        console.log(userInfo)

        // 3. 글로벌 스테이트에 저장하기
        setAccesstoken(accessToken)
        setUserInfo(userInfo)
        localStorage.setItem("accessToken",accessToken)
        localStorage.setItem("userInfo", JSON.stringify(userInfo))
                                        // 객체를 문자로 바꿔서 저장 로컬에는 문자열만 저장됨 객체안됨

        
        // 4. 로그인 성공페이지도 이동하기
                alert("로그인성공")        
                router.push("/24-02-login-use-apollo-client-success")
        
    }


    return(
        <div>
            이메일 : <input onChange={onChangeEmail} type="text" /><br />
            비밀번호 : <input onChange={onChangePassword}  type="password" /><br />
            <button onClick={onClickLogin}>로그인하기</button>
        </div>
    )
}