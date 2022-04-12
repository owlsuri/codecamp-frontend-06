import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { useState } from 'react'
import LoginUI from './login.presenter'

export default function Login(){

    const [ inputs, setInputs ] = useState({
        email:"",
        password:""
    })

    const router = useRouter()

    const onChangeInputs = (event) => {
        setInputs({
            ...inputs,
            [event.target.id]: event.target.value,
        })
    }

    const onClickLogin = () => {

        let check = true
        const emailRule = /^\w+@\w+\.\w+/

        if(!emailRule.test(inputs.email)){
            Modal.error({
                content: "이메일이 올바르지 않습니다.", 
            });
            check = false
        } 

        if(inputs.password.length < 4 || inputs.password.length > 20){
            Modal.error({
                content: "비밀번호가 올바르지 않습니다.", 
            });
            check = false
        }

        if(check === true){
            Modal.success({
                content: '웰컴!',
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
            onChangeInputs={onChangeInputs}
        />
    )
}