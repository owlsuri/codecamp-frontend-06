import { gql } from "@apollo/client";

export const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
    query fetchUseditemQuestionAnswers($useditemQuestionId: ID!, $page: int){
        fetchUseditemQuestionAnswers(useditemQuestionId:$useditemQuestionId, page:$page){
            _id
            contents 
            useditemQuestion {
                _id
                contents
                useditem
            }
            user {
                email 
                name 
            }
        }
    }
`