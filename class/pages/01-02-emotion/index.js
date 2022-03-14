import {MyTitle, MyEmail} from '../../styles/emotion'
export default function AAAPage() {

    // 여기는 자바스크립트 쓰는 곳
    // CSS태그로 쓰는 이름 첫자는 반듯이 대문자!


  return (
   <div>
    <MyTitle>
        로그인
    </MyTitle><br />
    아이디<br/>
    <MyEmail type='text' /><br />
    비밀번호<br/>
    <MyEmail type="password" />
</div>
  )
}
