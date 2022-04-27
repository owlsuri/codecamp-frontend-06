import QnaAnswerListItem from './QnaAnswerList.presenterItem';
import InfiniteScroll from "react-infinite-scroller";

export default function QnaAnswerListUI(props){

    return(
        <>
            <InfiniteScroll
                pageStart={0}
                loadMore={props.loadMore}
                hasMore={true}
                >
            {props.qadata?.fetchUseditemQuestionAnswers.map((el:any) => (
            <QnaAnswerListItem key={String(el?._id)} 
                el={el}
                qadata={props.qadata} 
                data={props.data}
                onClickDelete={props.onClickDelete} 
                onClickUpdate={props.onClickUpdate}          
            />        
            ))}  
            </InfiniteScroll> 
        </>
    )
}