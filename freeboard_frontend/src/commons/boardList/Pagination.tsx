// 페이지네이션
import * as S from './pagination.style'
import { useState } from 'react'


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
    <S.Wrapper>
      <S.Pre onClick={onClickPrevPage} 
      style={{ color: startPage === 1 ? "lightgray" : "black"}}>    
        ◀
      </S.Pre>

      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= props.lastPage && (
            <S.PageNum
              key={index + startPage}
              onClick={onClickPage}
              id={String(index + startPage)}
              current={startPage + index === current}
              style={{
                color: current === startPage + index ? "#6888B2" : "black",
                fontWeight: current === startPage + index ? "700" : "400"
              }}
            >
              {startPage + index}
            </S.PageNum>
          )
      )}
      <S.Next
        onClick={onClickNextPage}
        style={{ color: startPage + 10 > props.lastPage ? "lightgray" : "black"}}>
        ▶
      </S.Next>
    </S.Wrapper>
  );
}
