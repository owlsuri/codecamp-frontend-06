import { useMutation, useQuery } from '@apollo/client'
import { Modal } from 'antd'
import { useState } from 'react'
import { IMutation, IMutationCreateUseditemQuestionAnswerArgs, IMutationUpdateUseditemQuestionAnswerArgs } from '../../../../commons/types/generated/types'
import QnaAnswerWriteUI from './QnaAnswerWrite.presenter'
import { CREATE_USEDITEM_QUESTION_ANSWER, FETCH_USEDITEM_QUESTION_ANSWERS, UPDATE_USEDITEM_QUESTION_ANSWER } from './QnaAnswerWrite.queris'

export default function QnaAnswerWrite(props){

    const [createUseditemQuestionAnswer] = useMutation<Pick<IMutation,"createUseditemQuestionAnswer">, 
    IMutationCreateUseditemQuestionAnswerArgs>(CREATE_USEDITEM_QUESTION_ANSWER)

    const [updateUseditemQuestionAnswer] = useMutation<Pick<IMutation,'updateUseditemQuestionAnswer'>, 
    IMutationUpdateUseditemQuestionAnswerArgs>(UPDATE_USEDITEM_QUESTION_ANSWER)

    const [ qnaAnswer, setQnaAnswer ] = useState("")

    const OnChangeAnswer = (event) => {
        setQnaAnswer(event.target.value)
    }

    // 대댓글(answer) 등록하기
    const onClickAnswer = async() => {
        props.setIsAnswer(false)
       try{
        const result = await createUseditemQuestionAnswer({
            variables:{
                createUseditemQuestionAnswerInput:{
                    contents:qnaAnswer,
                },
                useditemQuestionId: props.el._id,
            },
            refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.el._id },
          },
        ],
        })
        console.log(result)
        setQnaAnswer("")
        Modal.success({
                content: '답글 등록이 완료되었습니다!',
            });
            props.setIsAnswer(false)
        } catch(error){
            if (error instanceof Error)
            Modal.error({
                content: error.message,
            });
        }
    }

    // 대댓글(answer) 수정하기
    const onClickUpdate = async () =>{

        console.log(props.el)

    if (!qnaAnswer) {
        Modal.error({ content: "수정된 내용이 없습니다." });
        return
    }
    
    try{
      const resultUpdate = await updateUseditemQuestionAnswer({
            variables:{
                updateUseditemQuestionAnswerInput:{
                    contents: qnaAnswer,
                },
                useditemQuestionAnswerId: String(props.el._id),
            },
            refetchQueries: [
                {
                    query: FETCH_USEDITEM_QUESTION_ANSWERS,
                    variables: { useditemQuestionId: String(props.el._id) },
                },
            ],
        })
            Modal.success({
                content: '수정이 완료되었습니다!',
            });
            props.setIsEdit(false)
    } catch(error){
            if (error instanceof Error)
            Modal.error({
                content: error.message,
            });
        }
    }

    return(
        <QnaAnswerWriteUI 
        qnaAnswer={qnaAnswer}
        OnChangeAnswer={OnChangeAnswer}
        onClickAnswer={onClickAnswer}
        isEdit={props.isEdit}
        el={props.el}
        onClickUpdate={onClickUpdate}
        />
    )
}