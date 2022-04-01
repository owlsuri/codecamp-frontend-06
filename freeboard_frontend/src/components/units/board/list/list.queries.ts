import { gql } from '@apollo/client'

export const FETCH_BOARDS = gql`
  query fetchBoards {
  fetchBoards{
    _id
    writer
    title
    contents
    createdAt
  }
}
`;

export const FETCH_BOARDS_BEST = gql`
  query fetchBoardsOfTheBest{
  fetchBoardsOfTheBest{
    _id
    writer
    title
    contents
  }
}
`;


