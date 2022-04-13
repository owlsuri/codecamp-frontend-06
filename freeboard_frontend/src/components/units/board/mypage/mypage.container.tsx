// 마이페이지
import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from './mypage.query'
import {withAuth} from '../../../../../src/commons/hocs/withAuth'

function LoginSuccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);


  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다!!</div>;
}
export default withAuth(LoginSuccessPage)