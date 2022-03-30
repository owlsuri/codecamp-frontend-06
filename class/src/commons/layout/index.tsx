import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import LayoutFooter from "./footer";
import { ReactNode } from "react";
import { useRouter } from "next/router";

    const Body = styled.div`
        height: 500px;
    `
    const BodyWrapper = styled.div`
    display: flex;
    `
    const LayoutSidebar = styled.div`
        width: 110px;
        height: 500px;
        background-color: orange;
    `
    // 배열의 형태로 숨길 곳의 주소를 넣어준다.
    const HIDDEN_HEADERS = [
        "/12-05-modal-refactoring",
        // . . .
        // . . 
    ]

    interface ILayoutProps {
        children : ReactNode;
    }

export default function Layout(props:ILayoutProps){
    const router = useRouter();
    console.log(router);

    const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath)

    return(
        <>
            {!isHiddenHeader && <LayoutHeader />}
            <LayoutBanner />
            <LayoutNavigation />
            <BodyWrapper >
                <LayoutSidebar>여기는 사이드바</LayoutSidebar>
                <Body>{props.children}</Body>
            </BodyWrapper>   
            <LayoutFooter />     
        </>
    )
}