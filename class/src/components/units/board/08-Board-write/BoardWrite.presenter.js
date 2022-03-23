//  `프리젠터

import * as S from "./Boardwrite.styles";

export default function BoardWriteUI(props) {
  return (
    <div>
      {/* <div>{data}</div> */}
      <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
      작성자 : <S.WriterInput type={"text"} onChange={props.onChangeWriter} />
      <br />
      제목 : <input type={"text"} onChange={props.onChangeTitle} />
      <br />
      내용 : <input type={"text"} onChange={props.onChangeContents} />
      <br />
      <br />
      <S.SubmitButton onClick={props.isEdit ? props.onClickUpdate : props.callGraphqlAPI} isActive={props.isActive}>
        {props.isEdit ? "수정" : "등록"}하기
      </S.SubmitButton>
    </div>
  );
}
