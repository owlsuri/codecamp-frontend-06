// Navigation
import styled from "@emotion/styled"

export default function LayoutNavigation(){

const Wrapper=styled.div`
        width: 1400px;
        height: 70px;
        background-color: #181817;
        color: white;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    `


    return(
        <Wrapper>
            <span>BOARD</span>
            <span>|</span>
            <span>PRODUCTS</span>
            <span>|</span>
            <span>MY PAGE</span>

        </Wrapper>
    )
}