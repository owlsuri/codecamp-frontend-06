export default function FirebaseUIPage(props) {
  

  return (
    <div>
      <div>파이어베이스 연결</div>
      <button onClick={props.onClickSubmit}>등록하기</button>
      <button onClick={props.onClickFetch}>조회하기</button>
    </div>
  );
}