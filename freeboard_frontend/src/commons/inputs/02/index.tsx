import styled from '@emotion/styled';



const Input = styled.input`
    width: 996px;
    height: 320px;
    border: 1px solid #BDBDBD;
    padding: 10px;
`

export default function Input02(props){
    
    return <Input type={props.mytype} {...props.register}/>
}