// 게시물 리스트 컨테이너

import BoardListUI from './list.presenter'
import { useRouter } from "next/router";
import { MouseEvent, useState  } from "react";
import { FETCH_BOARDS_BEST, FETCH_BOARDS_COUNT, FETCH_BOARDS } from './list.queries'
import { useQuery } from '@apollo/client';
import { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs} from '../../../../commons/types/generated/types';

 
export default function BoardList(){
    
    const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS)
    const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<Pick<IQuery, "fetchBoardsCount">, IQueryFetchBoardsCountArgs>(FETCH_BOARDS_COUNT)
    const { data: dataBoardBest } = useQuery<Pick<IQuery, "fetchBoardsOfTheBest">> (FETCH_BOARDS_BEST)
    // 페이지네이션 라스트페이지
    const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)
    
    const router = useRouter();

    const [keyword, setKeyword] = useState("")


    const onClickDetail = (event:MouseEvent<HTMLDivElement>) =>{
      if (event.target instanceof Element)
        router.push(`/boards/${event.currentTarget.id}`);
    } 

    const onClickWrite = () =>{
        router.push(`/boards/new`);
    }

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  }

    return (
      <BoardListUI
        data={data}
        refetch={refetch}
        lastPage={lastPage}
        onClickWrite={onClickWrite}
        onClickDetail={onClickDetail}
        dataBoardBest={dataBoardBest}
        dataBoardsCount={dataBoardsCount}
        keyword={keyword}
        refetchBoardsCount={refetchBoardsCount}
        onChangeKeyword={onChangeKeyword}
      />
    );
} 