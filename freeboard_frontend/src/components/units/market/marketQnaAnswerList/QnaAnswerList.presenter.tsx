import QnaAnswerListItem from './QnaAnswerList.presenterItem';
import InfiniteScroll from "react-infinite-scroller";

export default function QnaAnswerListUI(props){

console.log(props.data)
    return(
        <>
            <InfiniteScroll
                pageStart={0}
                loadMore={props.onLoadMore}
                hasMore={true}
                useWindow={false}
                >
            {props.data?.fetchUseditemQuestionAnswers.map((el:any) => (
            <QnaAnswerListItem key={String(el?._id)} 
                el={el}
                data={props.data} 
                onClickDelete={props.onClickDelete} 
                onClickUpdate={props.onClickUpdate}          
            />        
            ))}  
            </InfiniteScroll> 
        </>
    )
}