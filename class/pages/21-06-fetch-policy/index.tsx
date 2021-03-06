import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import FetchPolicyTest from "../../src/components/units/board/21-fetch-policy";

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

export default function GlobalStatePage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [aaa, setAaa] = useState(false);

  const onClickAaa = () => {
    setAaa(true);
  };

  return (
    <div>
      <button onClick={onClickAaa}>
        클릭하면 새로운 컴포넌트가 나타납니다!!
      </button>
      {aaa && <FetchPolicyTest />}
    </div>
  );
}
// 같은 내용 요청시 또 요청하지않음 캐시에 같은 것이 있다면 그것을 가져옴
