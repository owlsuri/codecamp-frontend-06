import { useMutation, useQuery } from '@apollo/client'
import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { IMutation, IMutationDeleteUseditemQuestionArgs } from '../../../../commons/types/generated/types'
import MarketQnAListUI from './QnaList.presenter'
import { FETCH_USEDITEM_QUESTIONS, DELETE_USEDITEM_QUESTION } from './QnaList.queries'

export default function MarketQnAList(){

    const router = useRouter()

    const [useditemQuestionId, setUseditemQuestionId] = useState("");

    const {data, fetchMore} = useQuery(FETCH_USEDITEM_QUESTIONS,{
        variables:{ useditemId: String(router.query.useditemId)  }
    })

    const [deleteUseditemQuestion] = useMutation<Pick<IMutation,'deleteUseditemQuestion'>, 
    IMutationDeleteUseditemQuestionArgs>(DELETE_USEDITEM_QUESTION)

    // 무한스크롤
    const onLoadMore = () => {
        if (!data) return;

        fetchMore({
        variables: { page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1 },
        updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult?.fetchUseditemQuestions)
            return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
            return {
            fetchUseditemQuestions: [
                ...prev.fetchUseditemQuestions,
                ...fetchMoreResult.fetchUseditemQuestions,
            ],
            };
        },
        });
    };

    const onClickDelete = async(event) => {
        try{
        const result = await deleteUseditemQuestion({
            variables:{
                useditemQuestionId: event.currentTarget.id,
            },
            refetchQueries: [{
                    query: FETCH_USEDITEM_QUESTIONS,
                    variables: { useditemId: router.query.useditemId },
                    },
                ],
        })
         setUseditemQuestionId("")

            Modal.success({
                content: '댓글 삭제가 완료되었습니다!',
            });
            router.push(`/market/${router.query.useditemId}`);

        } catch (error) {
            if(error instanceof Error)
            Modal.error({
                content: error.message,
            });
        }
        }
    


    return(<MarketQnAListUI 
    data={data}
    onLoadMore={onLoadMore}
    onClickDelete={onClickDelete}
    />
    )
}