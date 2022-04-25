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
