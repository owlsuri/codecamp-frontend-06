import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import QnaWriteUI from "./QnaWrite.presenter";
import { CREATE_USED_ITEM_QUESTION, FETCH_USED_ITEM_QUESTIONS } from "./QnaWrite.queries";


export default function QnaWrite(){

    const router = useRouter()

    const [contents, setContents] = useState("");

    const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION)
    const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
        variables: {useditemId:router.query.useditemId},
    })

    // 내용 input
    const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setContents(event.target.value);
    };


    const onClickAsk = async() => {
        try{
        const result = await createUseditemQuestion({
            variables:{
                createUseditemQuestionInput:{
                    contents
                },
                useditemId: String(router.query.useditemId)
            },
            refetchQueries: {
                query : FETCH_USED_ITEM_QUESTIONS,
                variables : { useditemId : router.query.useditemId },
            },
            
        })
        Modal.success({
                content: '문의 등록이 완료되었습니다!',
            });
            console.log(result)
        router.push(`/market/${router.query.useditemId}`);
        setContents("")
    }catch(error){
        if (error instanceof Error)
        Modal.error({
            content: error.message,
        });
    }
    }


    

    return(<QnaWriteUI 
    onChangeContents={onChangeContents}
    onClickAsk={onClickAsk}/>

    )
}