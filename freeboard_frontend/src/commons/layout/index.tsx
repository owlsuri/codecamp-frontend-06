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

    return(
        <>
        <LayoutHeader />
        <LayoutBanner />
        <LayoutNavigation />
        <BodyWrapper>
            <Body>{props.children}</Body>
        </BodyWrapper>
        <LayoutFooter />
        </>
    )
}