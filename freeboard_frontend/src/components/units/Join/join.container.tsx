import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import JoinUI from "./join.presenter";
import { FETCH_USER_LOGGED_IN } from "./join.query"; 

export default function Join(){

    const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordAgain, setPasswordAgain] = useState("")
    const [name, setName] = useState("")

    const router = useRouter()
    const { data } = useQuery(FETCH_USER_LOGGED_IN);

    const onChangeEmail = (event) =>{
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };    
    const onChangePasswordAgain = (event) => {
        setPasswordAgain(event.target.value);
    };  

    const onChangeName = (event) => {
        setName(event.target.value);
    };   

    const onClickJoin=()=>{        
        let check = true
        const emailRule = /^\w+@\w+\.\w+/
    try{
        if(!emailRule.test(email)){
            Modal.error({
                content: "이메일이 올바르지 않습니다.", 
            });
            check = false
        } 

        if(password.length < 4 || password.length > 20){
            Modal.error({
                content: "비밀번호가 올바르지 않습니다.", 
            });
            check = false
        }

        if(password !== passwordAgain){
            Modal.error({
                content: "비밀번호가 일치하지 않습니다.", 
            });
            check = false            
        }
        if(check === true){
            setAccessToken(accessToken);
            Modal.success({
                content: `${name}님의 회원가입을 환영합니다!`,
            });
            router.push("/boards")
        }
    } catch(error){
        if(error instanceof Error)
        Modal.error({
                content: error.message,
            });
    }
    }

    return(
        <JoinUI 
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onChangePasswordAgain={onChangePasswordAgain}
        onChangeName={onChangeName}
        onClickJoin={onClickJoin}
        />
    )
}