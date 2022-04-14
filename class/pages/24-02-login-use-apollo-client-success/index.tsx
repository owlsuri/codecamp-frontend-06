
import { useRecoilState } from "recoil"
import { userInfoState } from "../../src/commons/store"
import { withAuth } from "../../src/components/commons/hocs/withAuth"

    // const FETCH_USER_LOGGED_IN = gql`
    //     query fetchUserLoggedIn{
    //             fetchUserLoggedIn{
    //                 email
    //                 name
    //             }
    //     }
    // `

function LoginSuccessPage(){

    const [userInfo, setUsertInfo] = useRecoilState(userInfoState)
    // const { data } = useQuery(FETCH_USER_LOGGED_IN)
    // const router = useRouter()

    // useEffect(()=>{
    //     if(!localStorage.getItem("accessToken")){
    //         alert("로그인 후 이용이 가능 합니다!")
    //         router.push("/23-04-login-check")
    //     }
    // }, [])

    return(
        <div>
            {userInfo.name}님 환영합니다!!
        </div>
    )

}export default withAuth(LoginSuccessPage)
// 앞으로 로그인이 필요한 페이지는 앞에 withAuth만 붙여주면 됨