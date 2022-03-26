// 댓글쓰기 쿼리
import { gql } from "@apollo/client";

export const CREATE_BOARD_COMMENT = gql`
mutation createBoardComment($createBoardCommentInput: CreateBoardCommentInput!, $boardId: ID!){
    createBoardComment(createBoardCommentInput: $createBoardCommentInput, boardId:$boardId) {
        _id
        writer
        contents
        rating
        createdAt
        }
}
`;