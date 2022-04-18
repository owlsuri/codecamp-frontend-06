import styled from '@emotion/styled';



const Input = styled.input`
    width: 108px;
    height: 52px;
    border: 1px solid #BDBDBD;
    padding: 10px;
`

export default function Input03(props){
    
    return <Input type={props.mytype} {...props.register}/>
}