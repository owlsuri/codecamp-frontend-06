import { gql } from "@apollo/client";

export const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
    query fetchUseditemQuestionAnswers($useditemQuestionId: ID!, $page: Int){
        fetchUseditemQuestionAnswers(useditemQuestionId:$useditemQuestionId, page:$page){
            _id
            contents 
            user {
                email 
                name 
            }
            createdAt
        }
    }
`

export const DELETE_USED_ITEM_QUESTION_ANSWER = gql`
    mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!){
        deleteUseditemQuestionAnswer(useditemQuestionAnswerId:$useditemQuestionAnswerId){
            _id
        }
    }
`