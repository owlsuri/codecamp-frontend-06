//페이지 이동하기
import { useRouter } from 'next/router'

export default function staticRoutingPage(){

    const router = useRouter()

    const onClickMove1 = () =>{
        router.push("/05-06-dynamic-routed-board/83011")
    }
    const onClickMove2 = () => {
      router.push("/05-06-dynamic-routed-board/83012");
    };
    const onClickMove3 = () => {
      router.push("/05-06-dynamic-routed-board/83013");
    };
    //게시글 목록}
return (
    <div>
        <button onClick={onClickMove1}>1번 게시글로 이동하기</button>
        <button onClick={onClickMove2}>2번 게시글로 이동하기</button>
        <button onClick={onClickMove3}>3번 게시글로 이동하기</button>
    </div>
    )

}
