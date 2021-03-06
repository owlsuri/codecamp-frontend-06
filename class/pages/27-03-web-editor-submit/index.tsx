// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import dynamic from 'next/dynamic';
// 다이나믹 임포트

import { useForm } from 'react-hook-form'; 
import { gql, useMutation } from '@apollo/client';
import { Modal } from 'antd';
import { useRouter } from 'next/router';

const ReactQuill = dynamic(()=> import("react-quill"), {ssr : false})
                                                    // 서버사이트렌더링 false -> 브라우저에서만 그리겠다

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput:CreateBoardInput!){
        createBoard(createBoardInput:$createBoardInput){
            _id
        }
    }
`

export default function WebEditorHookFormPage(){

    const [createBoard] = useMutation(CREATE_BOARD)
    const router = useRouter()

    const {register, handleSubmit, setValue, trigger } = useForm({
        mode : "onChange"
    })

    const onChangeContents = (value:string) =>{
        console.log(value)


        // register로 등록하지 않고 강제로 값을 넣어주는 기능
        setValue("contents", value === "<p><br></p>" ? "" : value)
                                    // 내용부분 다 지워도 남는 태그들 때문에 빈칸으로 처리 안되므로 저 태그들만 있을때 빈칸으로 만들어줌

        trigger("contents")
        // onChange 됐다고 react-hook-form에 알려주는 기능
    }

    const onClickSubmit = async(data) =>{
        if(!(data.writer && data.password && data.title && data.contents)){
            // 없을때 경고
            alert("모두 입력해주세요")
            return
        } 
        // 뮤테이션
        try{
            const result = await createBoard({
                variables: {
                    createBoardInput:{
                        writer: data.writer,
                        password: data.password,
                        title: data.title,
                        contents: data.contents
                    },
                },
            })
            router.push(`/27-05-web-editor-detail-hydration/${result.data.createBoard._id}`)
        } catch(error){
            Modal.error({content: error.message })
        }
    }



    return(
        <form onSubmit={handleSubmit(onClickSubmit)}>
            제목 : <input type="text" {...register("title")}/><br />
            작성자 : <input type="text" {...register("writer")} /><br />
            비밀번호 : <input type="password" {...register("password")}/><br />
            내용 <ReactQuill onChange={onChangeContents} /><br />
            <button>등록하기</button>
        </form>
            )
}