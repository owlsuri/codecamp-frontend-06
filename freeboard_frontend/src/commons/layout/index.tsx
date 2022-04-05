// 레이아웃
import styled from "@emotion/styled"
import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutFooter from "./footer";
import LayoutNavigation from "./navigation/navigation.container";
import { useRouter } from "next/router";

    const BodyWrapper=styled.div`
        display: flex;
    `

    const Body=styled.div`

    `
    const HIDDEN_HEADERS = [
        "/"
    ]

export default function Layout(props){
    const router=useRouter();
    const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath)
    

    return(
        <>
        {!isHiddenHeader && <LayoutHeader /> }
        {!isHiddenHeader && <LayoutBanner />}
        {!isHiddenHeader && <LayoutNavigation />}
    <BodyWrapper> 
               <Body>{props.children}</Body>
                </BodyWrapper > 
        {!isHiddenHeader && <LayoutFooter /> }
        </>
    )
}