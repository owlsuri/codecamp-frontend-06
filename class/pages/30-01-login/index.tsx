import { useMutation, gql } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"
import { useRecoilState } from "recoil"
import { accessTokenState } from "../../src/commons/store"

// 토큰 만료시간 5초
const LOGIN_USER = gql`
    mutation loginUserExample($email:String!, $password:String!){
        loginUserExample(email:$email, password:$password){
            accessToken
        }
    }
`
// 아폴로에서 세팅필요함
export default function LoginPage(){
    const [accessToken, setAccesstoken] = useRecoilState(accessTokenState)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginUser] = useMutation(LOGIN_USER)
    const router = useRouter()

    const onChangeEmail =(event)=>{
        setEmail(event.target.value)
    }
    const onChangePassword =(event)=>{
        setPassword(event.target.value)
    }
    const onClickLogin = async() => {
        const result = await loginUser({
            variables:{
                email,
                password
            },
        })
        const accessToken = result.data.loginUserExample.accessToken
        setAccesstoken(accessToken)
        console.log(accessToken)

        alert("로그인성공")
        
        router.push("/30-02-login-success")
    }


    return(
        <div>
            이메일 : <input onChange={onChangeEmail} type="text" /><br />
            비밀번호 : <input onChange={onChangePassword}  type="password" /><br />
            <button onClick={onClickLogin}>로그인하기</button>
        </div>
    )
}