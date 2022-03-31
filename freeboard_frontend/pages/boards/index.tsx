// 게시글 목록조회하기
import BoardList from '../../src/components/units/board/list/list.container'
import { gql, useQuery} from '@apollo/client'
import Pagination from '../../src/commons/boardList/Pagination'

    const FETCH_BOARDS = gql`
    query fetchBoard($page: Int) {
        fetchBoards(page: $page){
        _id
        writer
        title
        contents
        createdAt
        }
    }
    `;

    const FETCH_BOARDS_COUNT = gql`
    query fetchBoardsCount {
        fetchBoardsCount
    }
`

export default function BoardListPage(){
    const { data,refetch } = useQuery(FETCH_BOARDS)
    const { data:dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT)
    const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)



    return (
        <>
        <BoardList data={data} />
        <Pagination refetch={refetch} lastPage={lastPage}/>
        </>
    ) 
} 