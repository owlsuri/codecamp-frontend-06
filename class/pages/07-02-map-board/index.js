//게시글 목록 - boards
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import styled from '@emotion/styled'

const FETCH_BOARDS = gql`
  query fetchBoard {
    fetchBoards{
      number
      writer
      title
      contents
    }
  }
`;

const MyRow = styled.div`
    display: flex;
`
const MyColumn = styled.div`
    width: 25%;
`


export default function staticRoutedPage() {
  const { data } = useQuery(FETCH_BOARDS)

  console.log(data);

  return (
    <div>
      {/* 조건부 렌더링 : 전체 다 받을때까지 시간이 걸리므로 먼저 보여줄 수 있는 것 먼저 보여줌*/}
      {/* 물음표쓰는 것 optionl-chainning - 내용은 렌더링이랑 같음 */}
      <div>
        {data?.fetchBoards.map((el, index) => (
          <MyRow key={el.number}>
            {/* 키는 고유한 것 */}
            <MyColumn>
              <input type="checkbox" />
            </MyColumn>
            <MyColumn>{el.number}</MyColumn>
            <MyColumn> {el.writer}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
            <MyColumn>{index}</MyColumn>
            {/* index는 map이 실행시켜준 순서 */}
            {/* <div>내용 : {el.contents}</div> */}
          </MyRow>
        ))}
      </div>
    </div>
  );
}
