import { useMutation, gql } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"
import { useRecoilState } from "recoil"
import { accessTokenState } from "../../src/commons/store"

const LOGIN_USER = gql`
    mutation loginUser($email:String!, $password:String!){
        loginUser(email:$email, password:$password){
            accessToken
        }
    }
`

export default function LoginPage(){
    const [accessToken, setAccesstoken] = useRecoilState(accessTokenState)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginUser] = useMutation(LOGIN_USER)
    const router = useRouter()

    const onChangeEmail =(event:any)=>{
        setEmail(event.target.value)
    }
    const onChangePassword =(event:any)=>{
        setPassword(event.target.value)
    }
    const onClickLogin = async() => {
        const result = await loginUser({
            variables:{
                email,
                password
            },
        })
        const accessToken = result.data.loginUser.accessToken
        setAccesstoken(accessToken)
        console.log(accessToken)

        alert("로그인성공")
        
        router.push("/22-02-login-success")
    }


    return(
        <div>
            이메일 : <input onChange={onChangeEmail} type="text" /><br />
            비밀번호 : <input onChange={onChangePassword}  type="password" /><br />
            <button onClick={onClickLogin}>로그인하기</button>
        </div>
    )
}