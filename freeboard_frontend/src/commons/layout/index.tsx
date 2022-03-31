// 레이아웃
import styled from "@emotion/styled"
import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutFooter from "./footer";
import LayoutNavigation from "./navigation";

export default function Layout(props){

    const BodyWrapper=styled.div`
        display: flex;
    `

    const Body=styled.div`

    `
    const LayoutSidebar=styled.div`
        width: 200px;
        background-color: #f8d894;
    `


    return(
        <>
        <LayoutHeader />
        <LayoutBanner />
        <LayoutNavigation />
        <BodyWrapper>
            <LayoutSidebar> 사이드바</LayoutSidebar>
            <Body>{props.children}</Body>
        </BodyWrapper>
        <LayoutFooter />
        </>
    )
}