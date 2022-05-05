// 레이아웃
import styled from "@emotion/styled"
import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutFooter from "./footer";
import LayoutNavigation from "./navigation/navigation.container";
import { useRouter } from "next/router";
import Today from "./today";

    const Wrapper=styled.div`
        display: flex;
    `
    const BodyWrapper=styled.div`
        display: flex;
    `

    const Body=styled.div`

    `
    const TodayShown=styled.div`
        position: fixed;
        display: flex;
        left: 1300px;
        width: 155px;
        height: 373px;
        border: 1px solid black;
        margin: 50px;
        background-color: white;
    `
    const HIDDEN_HEADERS = [
        "/",
    ]

    const HIDDEN_HEADERSTODAY = [
        "/",
        "/login",
        "/join",
    ]
export default function Layout(props){
    const router=useRouter();
    const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath)
    const isHiddenHeaderToday = HIDDEN_HEADERSTODAY.includes(router.asPath)
    

    return(
        <>
        {!isHiddenHeader && <LayoutHeader /> }
        {!isHiddenHeader && <LayoutBanner />}
        {!isHiddenHeader && <LayoutNavigation />}
        <Wrapper>
        <BodyWrapper> 
               <Body>{props.children}</Body>
        </BodyWrapper > 
        {!isHiddenHeaderToday && <TodayShown>
            <Today />
        </TodayShown>}
        {!isHiddenHeader && <LayoutFooter /> }
        </Wrapper>
        </>
    )
}