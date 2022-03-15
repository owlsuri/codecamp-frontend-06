import {Container, Header, MyTitle, QA, Glass, Profile, MenuNamePink, QQ, Name, Darrow, QuestionNum, Question, Qbox, Namebox, Menu, MenuName, Search, Arrow, Footer, Foot, FootName, FootImg, FootNamePink} from '../../../styles/01-faq'
export default function MyPage() {

    // 여기는 자바스크립트 쓰는 곳
    // CSS태그로 쓰는 이름 첫자는 반듯이 대문자!


  return (
    <Container>
        <Search>
            <Glass src='/ic-58-main-search-black@3x.png' />
        </Search>
        <Header>
            <MyTitle>마이</MyTitle>
            <Namebox>
                <Profile src='/img-60-profile-image@3x.png' />
                <Name>임정아</Name>
                <Arrow src='/ic-28-arrow@3x.png'></Arrow>
            </Namebox>
        </Header>
        <Menu>
            <MenuName>공지사항</MenuName>
            <MenuName>이벤트</MenuName>
            <MenuNamePink>FAQ</MenuNamePink>
            <MenuName>Q&A</MenuName>
        </Menu>
        <QA>
            <Qbox>
                <QQ>
                    <QuestionNum>Q.01</QuestionNum>
                    <Question>리뷰작성은 어떻게 하나요?</Question>
                </QQ>
                <Darrow src="/ic-70-arrow-right@2x.png"></Darrow>
            </Qbox>
            <Qbox>
                <QQ>
                    <QuestionNum>Q.02</QuestionNum>
                    <Question>리뷰수정/삭제는 어떻게 하나요?</Question>
                </QQ>
                <Darrow src="/ic-70-arrow-right@2x.png"></Darrow>
            </Qbox>
            <Qbox>
                <QQ>
                    <QuestionNum>Q.03</QuestionNum>
                    <Question>아이디/비밀번호를 잊어버렸어요.</Question>
                </QQ>
                <Darrow src="/ic-70-arrow-right@2x.png"></Darrow>
            </Qbox>
            <Qbox>
                <QQ>
                    <QuestionNum>Q.04</QuestionNum>
                    <Question>회원탈퇴를 하고싶어요.</Question>
                </QQ>
                <Darrow src="/ic-70-arrow-right@2x.png"></Darrow>
            </Qbox>        
            <Qbox>
                <QQ>
                    <QuestionNum>Q.05</QuestionNum>
                    <Question>출발지 설정은 어떻게 하나요?</Question>
                </QQ>
                <Darrow src="/ic-70-arrow-right@2x.png"></Darrow>
            </Qbox>
            <Qbox>
                <QQ>
                    <QuestionNum>Q.06</QuestionNum>
                    <Question>비밀번호를 변경하고 싶어요.</Question>
                </QQ>
                <Darrow src="/ic-70-arrow-right@2x.png"></Darrow>
            </Qbox>
        </QA>
        <Footer>
            <Foot>
                <FootImg src='/home.png'></FootImg>
                <FootName>홈</FootName>
            </Foot>
            <Foot>
                <FootImg src='/location.png'></FootImg>
                <FootName>잇츠로드</FootName>
            </Foot>
            <Foot>
                <FootImg src='/like.png'></FootImg>
                <FootName>마이찜</FootName>
            </Foot>
            <Foot>
                <FootImg src='/my.png'></FootImg>
                <FootNamePink>마이</FootNamePink>
            </Foot>
        </Footer>
    </Container>
  )
}
