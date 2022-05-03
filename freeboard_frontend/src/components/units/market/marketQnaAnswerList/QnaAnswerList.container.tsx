import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { IMutation, IMutationDeleteUseditemQuestionAnswerArgs } from "../../../../commons/types/generated/types";
import QnaAnswerListUI from "./QnaAnswerList.presenter";
import { FETCH_USEDITEM_QUESTION_ANSWERS } from "./QnaAnswerList.queries";

export default function QnaAnswerList(props){
    
    const { data: qadata, fetchMore } = useQuery(FETCH_USEDITEM_QUESTION_ANSWERS,{
        variables: { useditemQuestionId: props.el._id }
    })
     // 무한스크롤
    const loadMore = () => {
    if (!qadata) return;

    fetchMore({
      variables: {
        page: Math.ceil(qadata.fetchUseditemQuestionAnswers.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestionAnswers)
          return {
            fetchUseditemQuestionAnswers: [
              ...prev.fetchUseditemQuestionAnswers,
            ],
          };
        return {
          fetchUseditemQuestionAnswers: [
            ...prev.fetchUseditemQuestionAnswers,
            ...fetchMoreResult.fetchUseditemQuestionAnswers,
          ],
        };
      },
    });
  };

    return(
        <QnaAnswerListUI 
        qadata={qadata}
        data={props.data}
        loadMore={loadMore}
        qael={props.el}
        />
    )
}