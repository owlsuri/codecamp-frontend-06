// Header
import styled from "@emotion/styled"
import { useRouter } from "next/router"

export default function LayoutHeader(){

    const Wrapper=styled.div`
        width: 1400px;
        height: 70px;
        background-color: #ffffff;
        font-weight: 600;
        padding-left: 30px;
        display: flex;
        align-items: center;
        font-size: 20px;
    `
    const Owl=styled.img`
        cursor: pointer;
    `
    const Main=styled.span`
        padding-left: 5px;
        color: black;
    `
    const router = useRouter();

    const onClickToMain = () =>{
        router.push("/boards")
    }

    return(
        <Wrapper>
            <Owl src="/owl.png" onClick={onClickToMain} />  
            <Main>OwlSuri</Main>   
        </Wrapper>
    )
}