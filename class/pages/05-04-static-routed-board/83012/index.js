import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function staticRoutedPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: 83012 },
  });

  console.log(data);

  return (
    <div>
      {/* 조건부 렌더링 : 전체 다 받을때까지 시간이 걸리므로 먼저 보여줄 수 있는 것 먼저 보여줌*/}
      {/* 물음표쓰는 것 optionl-chainning - 내용은 렌더링이랑 같음 */}
      <div>{data?.fetchBoard.number}번 게시글에 오셨네요.</div>
      <div>작성자 : {data?.fetchBoard.writer}</div>
      <div>제목 : {data?.fetchBoard.title}</div>
      <div>내용 : {data?.fetchBoard.contents}</div>
    </div>
  );
}
