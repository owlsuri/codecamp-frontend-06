// 게시물 리스트 컨테이너

import BoardListUI from './list.presenter'
import { useQuery } from "@apollo/client";
import {FETCH_BOARDS} from './list.queries'
import { useRouter } from "next/router";
import { MouseEvent } from "react";



export default function BoardList(){

    const { data } = useQuery(FETCH_BOARDS)
    const router = useRouter();

    const onClickDetail = (event:MouseEvent<HTMLButtonElement>) =>{
        router.push(`/boards/${event.target.id}`);
    } 

    const onClickList = () =>{
        router.push(`/boards/new`);
    }

    console.log(data);

    return (
      <BoardListUI
        data={data}
        onClickList={onClickList}
        onClickDetail={onClickDetail}
        id
      />
    );
} 