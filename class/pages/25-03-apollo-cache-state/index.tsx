import { gql, useMutation, useQuery } from "@apollo/client";
import { delLocale } from "next/dist/shared/lib/router/router";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ApolloCacheStatePage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  const { data } = useQuery(FETCH_BOARDS);

  const onClickDelete = (boardId: string) => async () => {
    // 삭제하기로직
    await deleteBoard({
      variables: { boardId },
      update(cache, {data} ){
         const deletedId = data.deleteBoard
         cache.modify({
                fields:{
                    fetchBoard: (prev, {readField}) =>{
                        const filteredPrev = prev.filter(
                                (el) => readField("_id", el) !== deletedId
                            )
                        // el._id가 안되므로 readField에서 꺼내기
                        return [...filteredPrev]
                    }
                }
         })
      }
    });
  };
// 무한스크롤 페이지에서 등록 삭제를 이런식으로 사용함
  const onClickSubmit = async () => {
    // 등록하기로직
    await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "제목입니다~",
          contents: "내용입니다@@@",
        },
      },
      update(cache,{data}){
            cache.modify({
                fields:{
                    fetchBoard: (prev) =>{
                        return [data.createBoard, ...prev]
                        // 총 11개의 글이 만들어 짐
                    }                    
                }             
         })
      }
    });
  };


  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}

  // 1. 구조분해 할당으로 함수 파라미터 받기
  // function onClickAAA({ name, age, school }){
  //   console.log(name)
  // }

  // const child = {
  //   name: "철수",
  //   age: 13,
  //   school: "다람쥐초등학교"
  // }
  // onClickAAA(child)

  // 2. 안좋은 옛날 방식
  // function onClickAAA(name, age, school){
  //   console.log(name)
  // }

  // const name: "철수"
  // const age: 13
  // const school: "다람쥐초등학교"
  // onClickAAA(name, school)