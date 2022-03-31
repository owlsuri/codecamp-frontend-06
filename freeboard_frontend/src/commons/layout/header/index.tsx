// Header
import styled from "@emotion/styled"

export default function LayoutHeader(){

    const Wrapper=styled.div`
        width: 1600px;
        height: 70px;
        background-color: black;
        font-weight: 600;
        padding-left: 30px;
        color: white;
        display: flex;
        align-items: center;
        font-size: 20px;
    `

    return(
        <Wrapper>
            Suri의 게시판 입니다 :D
        </Wrapper>
    )
}