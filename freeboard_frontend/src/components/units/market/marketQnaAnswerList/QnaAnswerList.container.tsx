import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import QnaAnswerListUI from "./QnaAnswerList.presenter";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "./QnaAnswerList.queries";

export default function QnaAnswerList(props){
    const router = useRouter()
    
    const { data, fetchMore } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS,{
        variables: { useditemQuestionId: String(props.el._id) }
    })

     // 무한스크롤
    const onLoadMore = () => {
        if (!data) return;

        fetchMore({
        variables: { page: Math.ceil(data?.fetchUseditemQuestionAnswers.length / 10) + 1 },
        updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult?.fetchUseditemQuestionAnswers)
            return { fetchUseditemQuestionAnswers: [...prev.fetchUseditemQuestionAnswers] };
            return {
            fetchUseditemQuestionAnswers: [
                ...prev.fetchUseditemQuestionAnswers,
                ...fetchMoreResult.fetchUseditemQuestionAnswers,
            ],
            };
        },
        });
    };

    const onClickUpdate = () => {

    }

    const onClickDelete = () => {
        
    }

console.log(data)

    return(
        <QnaAnswerListUI 
        data={data}
        onLoadMore={onLoadMore}
        onClickUpdate={onClickUpdate}
        onClickDelete={onClickDelete}
        />
    )
}