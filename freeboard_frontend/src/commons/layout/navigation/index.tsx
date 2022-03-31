// Navigation
import styled from "@emotion/styled"

const NAVIGATION_MENUS = [
  { name: "라이브게시판", page: "/boards" },
  { name: "라이브상품", page: "/markets" },
  { name: "마이페이지", page: "/mypages" },
];

export default function LayoutNavigation(){

const Wrapper=styled.div`
        width: 1600px;
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
            <span>게시판</span>
            <span>|</span>
            <span>게시판</span>
            <span>|</span>
            <span>게시판</span>
            <span>|</span>
            <span>게시판</span>
            <span>|</span>
            <span>게시판</span>
        </Wrapper>
    )
}