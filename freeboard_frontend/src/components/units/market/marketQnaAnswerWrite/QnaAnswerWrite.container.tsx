import { useMutation, useQuery } from '@apollo/client'
import { Modal } from 'antd'
import { useState } from 'react'
import { IMutation, IMutationCreateUseditemQuestionAnswerArgs } from '../../../../commons/types/generated/types'
import QnaAnswerWriteUI from './QnaAnswerWrite.presenter'
import { CREATE_USED_ITEM_QUESTION_ANSWER, FETCH_USEDITEM_QUESTION_ANSWERS } from './QnaAnswerWrite.queris'

export default function QnaAnswerWrite(props){

    const [createUseditemQuestionAnswer] = useMutation<Pick<IMutation,"createUseditemQuestionAnswer">, IMutationCreateUseditemQuestionAnswerArgs>(CREATE_USED_ITEM_QUESTION_ANSWER)


    const [ qnaAnswer, setQnaAnswer ] = useState("")

    const OnChangeAnswer = (event) => {
        setQnaAnswer(event.target.value)
    }

    const onClickAnswer = async() => {
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
        />
    )
}