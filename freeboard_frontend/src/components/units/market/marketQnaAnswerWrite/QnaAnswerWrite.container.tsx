import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { IMutation, IMutationCreateUseditemQuestionAnswerArgs } from '../../../../commons/types/generated/types'
import QnaAnswerWriteUI from './QnaAnswerWrite.presenter'
import { CREATE_USED_ITEM_QUESTION_ANSWER } from './QnaAnswerWrite.queris'

export default function QnaAnswerWrite(){

    const [createUseditemQuestionAnswer] = useMutation<Pick<IMutation,"createUseditemQuestionAnswer">, IMutationCreateUseditemQuestionAnswerArgs>(CREATE_USED_ITEM_QUESTION_ANSWER)

    const [ qnaAnswer, setQnaAnswer ] = useState("")

    const OnChangeAnswer = (event) => {
        setQnaAnswer(event.target.value)
    }

    const onClickAnswer = async() => {


    }

    return(
        <QnaAnswerWriteUI 
        qnaAnswer={qnaAnswer}
        OnChangeAnswer={OnChangeAnswer}
        onClickAnswer={onClickAnswer}
        />
    )
}