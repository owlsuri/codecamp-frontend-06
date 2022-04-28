import styled from '@emotion/styled';



const Input = styled.input`
    width: 996px;
    height: 320px;
    border: 1px solid #BDBDBD;
    padding: 10px;
`

export default function Input02(props){
    
    return <Input placeholder={props.placeholder} defaultValue={props.defaultValue} type={props.mytype} {...props.register}/>
}