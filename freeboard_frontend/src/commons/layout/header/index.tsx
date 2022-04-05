// Header
import styled from "@emotion/styled"
import { useRouter } from "next/router"
// import WeatherAPI from '../../weather/index'

export default function LayoutHeader(){

    const Wrapper=styled.div`
        width: 1400px;
        height: 70px;
        background-color: #ffffff;
        font-weight: 600;
        padding-left: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
    `
    const Owl=styled.img`
        cursor: pointer;
    `
    const Main=styled.span`
        padding-left: 5px;
        color: black;
    `
    const Logo=styled.div`
        cursor: pointer;
    `
    
    const router = useRouter();

    const onClickToMain = () =>{
        router.push("/boards")
    }

    return(
        <Wrapper>
            <Logo>
                <Owl src="/owl.png" onClick={onClickToMain} />  
                <Main>OwlSuri</Main>  
            </Logo>
            
        </Wrapper>
    )
}