import { useRouter } from "next/router"
import Link from 'next/link'

export default function KakaoMapPage(){

    const router = useRouter()
    const onClickMoveToMap = () =>{
        router.push("/29-03-kakao-map-routed")
    }

    return(
    <Link href="/29-03-kakao-map-routed"><a>맵으로 이동하기</a></Link>
    // <button onClick={onClickMoveToMap}>map으로 이동하기</button>
    )
}

