import styled from '@emotion/styled'

const Wrapper=styled.div`
    width: 62.5rem;
    height: 1000px;
    background-color: red;

    // 태블릿 사이즈
    @media (min-width: 768px) and (max-width: 991px){
        width: 500px;
        height: 500px;
        background-color: green;
    }

    // 모바일 사이즈
    @media (max-width: 767px) {
        width: 100px;
        height: 100px;
        background-color: blue;
        /* display: none;  // 모바일에서는 상자 나타나지 않음 */
    }
`


export default function ResponsiveDesignPage(){

    return(
        <Wrapper>상자</Wrapper>
    )
}