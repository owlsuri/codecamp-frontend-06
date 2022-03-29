// 디테일 컨테이너
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardReadUI from "./read.presenter";
import {DELETE_BOARD, FETCH_BOARD, LIKE_BOARD} from "./read.queries"
import React from "react";
import { IBoardReadProps } from './read.typescript'


export default function BoardRead(props:IBoardReadProps){
    const router = useRouter();

    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.boardId },
    });
    
    const [deleteBoard] = useMutation(DELETE_BOARD);
    const [likeBoard] = useMutation(LIKE_BOARD);

    // 좋아요
    const onClickLike = async () => {
        try { 
          const result = await likeBoard({
          variables: { boardId: String(router.query.boardId) },
        refetchQueries: [ 
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },]
      },
      )
          console.log(result)
        } catch (error) {
        alert(error.message);
      }
    }
    
    // 싫어요
    const onClickDisLike = async () => {
      
    }

    // 수정하기로 페이지 이동(라우팅) 버튼 기능
    const onClickMoveEdit = () =>{          
      router.push(`/boards/${router.query.boardId}/edit`);
    }
    
    // 삭제하기 버튼 기능
    const onClickDelete = async () => {
      try {
        const result = await deleteBoard({
          variables: { boardId: router.query.boardId },
        });
        console.log(result);
        alert("삭제완료")
        router.push(`/boards`);

      } catch (error) {
        alert(error.message);
      }
    }

    // 목록으로 이동(라우팅) 버튼
        const onClickList = async () => {
          router.push(`/boards/`);
        }

    //

        return (
          <BoardReadUI
            data={data}
            onClickMoveEdit={onClickMoveEdit}
            onClickDelete={onClickDelete}
            onClickList={onClickList}
            onClickLike={onClickLike}
            onClickDisLike={onClickDisLike}
          />
        );};
