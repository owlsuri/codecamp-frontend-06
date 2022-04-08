export default function FirebaseUIPage(props) {
  

  return (
    <div>
      <div>파이어베이스 연결</div>
      <input type="text" onChange={props.onChangeWriter} placeholder="작성자를 입력해주세요" /><br />
      <input type="text" onChange={props.onChangeTitle} placeholder= "제목을 입력해주세요" /><br />
       <input type="text" onChange={props.onChangeContents} placeholder= "내용을 입력해주세요" /><br />
      <button onClick={props.onClickSubmit}>등록하기</button>
      <button onClick={props.onClickFetch}>조회하기</button>
    </div>
  );
}