//  `프리젠터 컴포넌트

import * as S from "./Boardwrite.styles";
import {IBoardWriteUIProps} from './BoardWriteTypes'


export default function BoardWriteUI(props:IBoardWriteUIProps) {
  return (
    <div>
      {/* <div>{data}</div> */}
      <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
      작성자 :{" "}
      <S.WriterInput
        type={"text"}
        onChange={props.onChangeWriter}
        defaultValue={props.data?.fetchBoard.writer}
      />
      <br />
      제목 :{" "}
      <input
        type={"text"}
        onChange={props.onChangeTitle}
        defaultValue={props.data?.fetchBoard.title}
      />
      <br />
      내용 :{" "}
      <input
        type={"text"}
        onChange={props.onChangeContents}
        defaultValue={props.data?.fetchBoard.contents} 
        //작성하기페이지는 defaultValue가 필요하지 않으므로 데이터가 있을때만 받기위해 옵셔널체이닝해서 보여주기
      />
      <br />
      <br />
      <S.SubmitButton
        onClick={props.isEdit ? props.onClickUpdate : props.callGraphqlAPI}
        isActive={props.isActive}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </S.SubmitButton>
    </div>
  );
}
