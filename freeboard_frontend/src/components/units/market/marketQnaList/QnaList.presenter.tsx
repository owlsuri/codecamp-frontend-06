import InfiniteScroll from "react-infinite-scroller";
import MarketQnAListItem from './QnaList.presenteritem';

export default function MarketQnAListUI(props){

    return(
        <>
        {/* 무한스크롤 */}
            <div style={{height:"500px", overflow:"auto"}}>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={props.onLoadMore}
                    hasMore={true}
                    useWindow={false}
                >
                {props.data?.fetchUseditemQuestions.map((el:any) => (
                   <MarketQnAListItem  key={el?._id} 
                   el={el}
                   data={props.data}  
                   onClickDelete={props.onClickDelete}                 
                   />                   
                ))}
                </InfiniteScroll>
                </div>
        </>
)
}