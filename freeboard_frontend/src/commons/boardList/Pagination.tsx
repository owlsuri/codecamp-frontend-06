import styled from "@emotion/styled";
import { useState } from 'react'

const Pre = styled.button`
  width: 40px;
  height: 40px;
`;

const Next = styled.button`
  width: 40px;
  height: 40px;
`;

export default function Pagination(props) {
  const [startPage, setStartPage] = useState(1);
  const [current, setCurrent] = useState(false);

  const onClickPage = (event) => {
    props.refetch({ page: Number(event.target.id) });
    setCurrent(Number(event.target.id));
  };

  const onClickPrevPage = () => {
    if (startPage === 1) {
      return;
    }

    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
    setCurrent(Number(startPage - 10));
  };

  const onClickNextPage = () => {
    if (startPage + 10 > props.lastPage) return;
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
    setCurrent(Number(startPage + 10));
  };

  return (
    <div>
      <Pre onClick={onClickPrevPage} disabled={startPage === 1 ? true : false}>
        ◀
      </Pre>

      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= props.lastPage && (
            <span
              key={index + startPage}
              onClick={onClickPage}
              id={String(index + startPage)}
              current={startPage + index === current}
              style={{
                color: current === startPage + index ? "red" : "black",
              }}
            >
              {" "}
              {startPage + index}
            </span>
          )
      )}
      <Next
        onClick={onClickNextPage}
        disabled={startPage + 10 > props.lastPage ? true : false}
      >
        ▶
      </Next>
    </div>
  );
}
