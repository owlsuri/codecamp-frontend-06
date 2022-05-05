import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { IMutation, IMutationCreateUseditemQuestionArgs, IMutationUpdateUseditemQuestionArgs } from "../../../../commons/types/generated/types";
import QnaWriteUI from "./QnaWrite.presenter";
import { CREATE_USED_ITEM_QUESTION, FETCH_USED_ITEM_QUESTIONS, UPDATE_USEDITEM_QUESTION } from "./QnaWrite.queries";


export default function QnaWrite(props){

    const router = useRouter()

    const [contents, setContents] = useState("");
    
    const [createUseditemQuestion] = useMutation<Pick<IMutation,"createUseditemQuestion">, IMutationCreateUseditemQuestionArgs>(CREATE_USED_ITEM_QUESTION)
    
    const [updateUseditemQuestion] = useMutation<Pick<IMutation,"updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs>(UPDATE_USEDITEM_QUESTION);
    
    const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
        variables: {useditemId:router.query.useditemId},
    })

    // 내용 input
    const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setContents(event.target.value);
    };

    // 질문 등록하기
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
            
            setContents("")
        router.push(`/market/${router.query.useditemId}`);
    }catch(error){
        if (error instanceof Error)
        Modal.error({
            content: error.message,
        });
    }
    }

    const onClickUpdateQna = async() => {

    if (!contents) {
        Modal.error({ content: "수정된 내용이 없습니다." });
        return
    }

    try{
    const result2 = await updateUseditemQuestion({
        variables: {
                updateUseditemQuestionInput: { 
                    contents 
                    },
                useditemQuestionId: props.el?._id,
                },
            })
    props.setIsEdit(false)
    Modal.success({
                content: '문의 수정이 완료되었습니다!',
            });
        } catch(error){
            if (error instanceof Error)
            Modal.error({
                content: error.message,
            })
        }
    }

    return(
    <QnaWriteUI 
        onChangeContents={onChangeContents}
        onClickAsk={onClickAsk}
        onClickUpdateQna={onClickUpdateQna}
        data={data}
        isEdit={props.isEdit}
        el={props.el}
        contents={contents}
    />
    )
}