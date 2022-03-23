import {FETCH_BOARD} from './read.queries'
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardReadUI from "./read.presenter";
import {DELETE_BOARD} from "./read.queries"


export default function BoardRead(){
    const router = useRouter();

        const { data } = useQuery(FETCH_BOARD, {
            variables: { boardId: router.query.boardId },
        });
        const [deleteBoard] = useMutation(DELETE_BOARD);

        console.log(data);

        const onClickEdit = () =>{          
          router.push(`/boards/${router.query.boardId}/edit`);
        }
        
        const onClickDelete = async (event) => {
          try {
            const result = await deleteBoard({
              variables: { boardId: router.query.boardId },
              //   refetchQueries: [{ query: FETCH_BOARD }],
            });
            console.log(result);
            alert("삭제완료")
            router.push(`/boards`);
          } catch (error) {
            alert(error.message);
          }
        }

        const onClickList = async () => {
          router.push(`/boards/`);
        }

          return (
            <BoardReadUI
              data={data}
              onClickEdit={onClickEdit}
              onClickDelete={onClickDelete}
              onClickList={onClickList}
            />
          );};
