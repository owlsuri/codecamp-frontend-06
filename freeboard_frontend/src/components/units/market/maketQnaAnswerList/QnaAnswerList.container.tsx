import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import QnaAnswerListUI from "./QnaAnswerList.presenter";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "./QnaAnswerList.queries";

export default function QnaAnswerList(){
    const router = useRouter()
    
    const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS,{
        variables: { useditemQuestionId: String(router.query.useditemId) }
    })

    console.log(data)

    return(
        <QnaAnswerListUI data={data}/>
    )
}