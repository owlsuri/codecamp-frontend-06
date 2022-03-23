//게시글 목록 - boards
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import styled from '@emotion/styled'
import { useMutation } from "@apollo/client";

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

const DELETE_BOARD = gql`
  mutation deleteBoard($number:Int){
    deleteBoard(number:$number){
      message
    }
  }
`

const Row = styled.div`
    display: flex;
`
const Column = styled.div`
    width: 20%;
`


export default function staticRoutedPage() {
  const { data } = useQuery(FETCH_BOARDS)
  const [ deleteBoard ] = useMutation(DELETE_BOARD)

  console.log(data);

  const onClickDelete = (event) => {
    deleteBoard({variables : { number : Number(event.target.id) }, 
    refetchQueries:[{query: FETCH_BOARDS}]})
  }

  return (

      <div>
        {data?.fetchBoards.map((el, index) => (
          <Row key={el.Number}>
            {/* 키는 인덱스 안됨 완전 고유한 것 맨 위 부모 div대신 Fragment T쓰면 key 쓸 수 있다.*/}
            <Column>
              <input type="checkbox" />
            </Column>
            <Column>{el.number}</Column>
            <Column> {el.writer}</Column>
            <Column>{el.title}</Column>
            <Column>{index}</Column>

            {/* index는 map이 실행시켜준 순서 */}
            <button id={el.number} onClick={onClickDelete}>삭제</button>
            {/* <div>내용 : {el.contents}</div> */}
          </Row>
        ))}
      </div>

  );
}
