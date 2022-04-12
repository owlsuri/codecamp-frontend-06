import styled from "@emotion/styled";

export const Wrapper = styled.div`

` 
export const Container = styled.div`
    width: 1400px;
    height: 1080px;
    display: flex;
    flex-direction: column;
    align-items: center;
` 
export const Logo = styled.img`
    width: 50px;
    margin-bottom: 50px;
    margin-top: 100px;
` 
export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
` 
export const Input = styled.input`
    width: 384px;
    height: 64px;
    padding-left: 10px;
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid lightgray;
` 
export const CheckBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 10px;
    
` 
export const CheckText = styled.div`
    padding-left: 10px;
` 
export const Check = styled.input`
    padding-right: 5px;
` 
export const LoginBtn = styled.button`
    width: 384px;
    height: 64px;
    border-radius: 10px;
    background-color: ${(props) => (props.isActive ? "#6888B2" : "#828282")};
    border: none;
    color: white;
    cursor: pointer;
` 
export const MenuBox = styled.div`
    width: 384px;
    display: flex;
    justify-content: space-around;
    padding-top: 30px;
` 
export const Menu = styled.span`
    
` 