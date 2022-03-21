import * as S from './Boardwrite.styles'

export default function BoardWriteUI(props){


    return (
      <div>
        {/* <div>{data}</div> */}
        작성자 : <S.WriterInput type={"text"} onChange={props.onChangeWriter} />
        <br />
        제목 : <input type={"text"} onChange={props.onChangeTitle} />
        <br />
        내용 : <input type={"text"} onChange={props.onChangeContents} />
        <br />
        <br />
        <S.SubmitButton onClick={props.callGraphqlAPI} 
        isActive={props.isActive}>
          GRAPHQL_API요청하기!
        </S.SubmitButton>
      </div>
    ); 
}
