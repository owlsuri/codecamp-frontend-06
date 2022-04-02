import { gql } from '@apollo/client'

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
  fetchBoards(page: $page){
    _id
    writer
    title
    contents
    createdAt
  }
}
`;
export const FETCH_BOARDS_COUNT = gql`
    query fetchBoardsCount {
        fetchBoardsCount
    }
`

export const FETCH_BOARDS_BEST = gql`
  query fetchBoardsOfTheBest{
  fetchBoardsOfTheBest{
    _id
    writer
    title
    contents
    createdAt
    likeCount
  }
}
`;


