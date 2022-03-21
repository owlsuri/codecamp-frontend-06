import {FETCH_BOARD} from './read.queries'
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardReadUI from "./read.presenter";


export default function BoardRead(){
    const router = useRouter();

        const { data } = useQuery(FETCH_BOARD, {
            variables: { boardId: router.query.boardId },
        });

        console.log(data);

    return <BoardReadUI data={data} />;
}