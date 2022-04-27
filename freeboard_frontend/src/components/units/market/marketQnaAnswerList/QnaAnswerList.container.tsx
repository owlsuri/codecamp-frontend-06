import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { IMutation, IMutationDeleteUseditemQuestionAnswerArgs } from "../../../../commons/types/generated/types";
import QnaAnswerListUI from "./QnaAnswerList.presenter";
import { FETCH_USEDITEM_QUESTION_ANSWERS, DELETE_USEDITEM_QUESTION_ANSWER } from "./QnaAnswerList.queries";

export default function QnaAnswerList(props){
    const router = useRouter()
    
    const { data: qadata, fetchMore } = useQuery(FETCH_USEDITEM_QUESTION_ANSWERS,{
        variables: { useditemQuestionId: props.el._id }
    })

    // const [deleteUseditemQuestionAnswer] = useMutation<Pick<IMutation, "deleteUseditemQuestionAnswer">,IMutationDeleteUseditemQuestionAnswerArgs
    //   >(DELETE_USEDITEM_QUESTION_ANSWER);

     // 무한스크롤
    const loadMore = () => {
    if (!qadata) return;

    fetchMore({
      variables: {
        page: Math.ceil(data.fetchUseditemQuestionAnswers.length / 10) + 1,
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

    const onClickUpdate = () => {

    }

    // const onClickDelete = async() => {
      
    //     try{
    //         const result = await deleteUseditemQuestionAnswer({
    //             variables:{
    //                 useditemQuestionAnswerId: props.el._id,
    //             }
    //         })
    //         Modal.success({
    //                 content: '삭제가 완료되었습니다!',
    //             });
    //     } catch (error) {
    //         if(error instanceof Error)
    //         Modal.error({
    //             content: error.message,
    //         });
    //     }
    // }



    return(
        <QnaAnswerListUI 
        qadata={qadata}
        data={props.data}
        loadMore={loadMore}
        onClickUpdate={onClickUpdate}
        el={props.el}
        />
    )
}