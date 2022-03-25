// import axios from 'axios'
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { IMutation, IMutationCreateBoardArgs} from "../../src/commons/types/generated/types";

const CREAT_BOARD = gql`
  mutation mymutation($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;
export default function GraphqlMutationPage() {
  const [data, setData] = useState("");

  const [writer, setWriter] = useState<string>("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [callApi] = useMutation<Pick<IMutation,'createBoard'>,IMutationCreateBoardArgs >(CREAT_BOARD);

  const callGraphqlAPI = async () => {
    const result = await callApi({
      variables: { writer: writer, title: title, contents: contents },
    }); //graphql방식
    
    console.log(result);
    setData(result.data?.createBoard?.message || "");
    // setData(result.data.title)
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <div>
      {/* <div>{data}</div> */}
      작성자 : <input type={"text"} onChange={onChangeWriter} />
      <br />
      제목 : <input type={"text"} onChange={onChangeTitle} />
      <br />
      내용 : <input type={"text"} onChange={onChangeContents} />
      <br />
      {data}
      <br />
      <button onClick={callGraphqlAPI}>GRAPHQL_API요청하기!</button>
    </div>
  );
}
