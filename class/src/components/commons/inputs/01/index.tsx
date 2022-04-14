import styled from '@emotion/styled';
import {UseFormRegisterReturn} from 'react-hook-form'

interface IProps {
    type : "text" | "password"
    register : UseFormRegisterReturn
}

const Input = styled.input`
    
`

export default function Input01(props:IProps){
    
    return <Input type={props.mytype} {...props.register}/>
}