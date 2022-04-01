// 게시물 리스트 컨테이너

import BoardListUI from './list.presenter'
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { FETCH_BOARDS_BEST } from './list.queries'
import { useQuery } from '@apollo/client';



export default function BoardList(props){

    const { data: dataBoardBest } = useQuery(FETCH_BOARDS_BEST)
    
    const router = useRouter();

    const onClickDetail = (event:MouseEvent<HTMLDivElement>) =>{
        router.push(`/boards/${event.target.id}`);
    } 

    const onClickList = () =>{
        router.push(`/boards/new`);
    }


    return (
      <BoardListUI
        data={props.data}
        onClickList={onClickList}
        onClickDetail={onClickDetail}
        id
        dataBoardBest={dataBoardBest}
      />
    );
} 