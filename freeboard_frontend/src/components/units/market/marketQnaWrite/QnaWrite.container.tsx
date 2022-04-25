import { useMutation } from "@apollo/client";
import QnaWriteUI from "./QnaWrite.presenter";
import { CREATE_USED_ITEM_QUESTION } from "./QnaWrite.queries";


export default function QnaWrite(){

    const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION)

    




    const onClickAsk = () => {

    }


    

    return(<QnaWriteUI 
    onClickAsk={onClickAsk}/>

    )
}