// 게시글 목록 - boards
import Board from '../../src/components/units/board/12-board-pagenation/Board'
import Pagination from '../../src/components/units/board/12-board-pagenation/Pagination'
import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoard($page: Int) {
    fetchBoards(page: $page){
      _id
      writer
      title
      contents
    }
  }
`;
    const FETCH_BOARDS_COUNT = gql`
    query fetchBoardsCount {
        fetchBoardsCount
    }
`


export default function MapBoardPage() {
    const { data, refetch } = useQuery(FETCH_BOARDS)
    const { data:dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT)
    const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)


    console.log()


    return (
        <div>
            <Board data={data}/>
            <Pagination refetch={refetch} lastPage={lastPage} />
        </div>
    );
}
