import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { VisitedPageState } from '../../../commons/store';



export function useMoveToPage(){

    const router = useRouter()
    const [visitedPage, setVisitedPage] = useRecoilState(VisitedPageState)


    const onClickMoveToPage = (path) =>() =>{
        setVisitedPage(path)
        router.push(path)
    }

    return {
        visitedPage,
        onClickMoveToPage
    }
}