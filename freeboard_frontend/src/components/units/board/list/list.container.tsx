// 게시물 리스트 컨테이너

import BoardListUI from './list.presenter'
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { FETCH_BOARDS_BEST, FETCH_BOARDS_COUNT, FETCH_BOARDS } from './list.queries'
import { useQuery } from '@apollo/client';
import { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs} from '../../../../commons/types/generated/types';
import { useState, ChangeEvent } from 'react';
import _  from 'lodash'
 
export default function BoardList(){
    
    const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS)
    const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<Pick<IQuery, "fetchBoardsCount">, IQueryFetchBoardsCountArgs>(FETCH_BOARDS_COUNT)
    const { data: dataBoardBest } = useQuery<Pick<IQuery, "fetchBoardsOfTheBest">> (FETCH_BOARDS_BEST)

    const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)
    
    const router = useRouter();

    const [keyword, setKeyword] = useState("")

    const getDebounce = _.debounce((data:any)=>{
        refetch({ search: data, page : 1 })
        refetchBoardsCount({ search: data });
        setKeyword(data)
    }, 200)

    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        getDebounce(event.target.value)
    }

    const onClickDetail = (event:MouseEvent<HTMLDivElement>) =>{
      if (event.target instanceof Element)
        router.push(`/boards/${event.currentTarget.id}`);
    } 

    const onClickWrite = () =>{
        router.push(`/boards/new`);
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
        onChangeSearch={onChangeSearch}
        keyword={keyword}
        refetchBoardsCount={refetchBoardsCount}
      />
    );
} 