import { gql } from "@apollo/client";

export const CREAT_BOARD = gql`
  mutation mymutation($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;
