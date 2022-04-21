import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { useState } from 'react'
import LoginUI from './login.presenter'
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from './login.query';
import { accessTokenState } from '../../../commons/store';
import { useRecoilState } from 'recoil';

export default function Login(){
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [isActive, setIsActive] = useState(false)

    const router = useRouter()
    const [loginUser] = useMutation(LOGIN_USER)

    const onChangeEmail = (event) =>{
        setEmail(event.target.value)
        if(event.target.value && password){
            setIsActive(true)
        } else {
            setIsActive(false);
        }
        console.log(email)
        console.log(isActive)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);

        if(email && event.target.value){
            setIsActive(true)
        } else {
            setIsActive(false);
        }
                console.log(isActive)

    };    

    const onClickLogin = async() => {
      try{
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
       const accessToken = result.data.loginUser.accessToken;
       localStorage.setItem("accessToken", accessToken);

        let check = true
        const emailRule = /^\w+@\w+\.\w+/

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

        if(check === true){
            setAccessToken(accessToken);
            Modal.success({
                content: '웰컴!',
            });
            router.back()
        }
    } catch(error){
        if(error instanceof Error)
        Modal.error({
                content: error.message,
            });
    }
    }


    const onClickToJoin = () =>{
        router.push('/join')
    }


    return(
        <LoginUI 
            onClickToJoin={onClickToJoin}
            onClickLogin={onClickLogin}
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
            isActive={isActive}
        />
    )
}