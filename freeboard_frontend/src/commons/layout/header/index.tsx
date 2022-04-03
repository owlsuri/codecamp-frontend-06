// Header
import styled from "@emotion/styled"

export default function LayoutHeader(){

    const Wrapper=styled.div`
        width: 1400px;
        height: 70px;
        background-color: white;
        font-weight: 600;
        padding-left: 30px;
        color: #6888B2;
        display: flex;
        align-items: center;
        font-size: 20px;
    `

    return(
        <Wrapper>
            <img src="/owl.png"/>     
        </Wrapper>
    )
}