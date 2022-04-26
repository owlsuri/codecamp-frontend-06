import { gql } from "@apollo/client";

export const FETCH_USED_ITEM_QUESTIONS = gql`
query fetchUseditemQuestions($page:Int, $useditemId: ID!){
    fetchUseditemQuestions(page:$page, useditemId:$useditemId){
        _id 
        user {
            _id
            email
            name
        } 
        contents 
        createdAt
    }
}
`

export const DELETE_USED_ITEM_QUESTION = gql`
mutation deleteUseditemQuestion($useditemQuestionId: ID!){
    deleteUseditemQuestion(useditemQuestionId:$useditemQuestionId){
        _id
    }
}
`