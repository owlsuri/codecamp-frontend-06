// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import dynamic from 'next/dynamic';
// 다이나믹 임포트

const ReactQuill = dynamic(()=> import("react-quill"), {ssr : false})
                                                       // 서버사이트렌더링 false -> 브라우저에서만 그리겠다

export default function WebEditorPage(){

    const onChangeContents = (value:string) =>{
        console.log(value)
    }

    return(
        <div>
            제목 : <input type="text" /><br />
            작성자 : <input type="text" /><br />
            비밀번호 : <input type="password" /><br />
            내용 : <ReactQuill onChange={onChangeContents}/><br />
            <button>등록하기</button>

        </div>
            )
}