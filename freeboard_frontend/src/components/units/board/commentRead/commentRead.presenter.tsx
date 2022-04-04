// 코멘트 리스트 프레젠터

import CommentReadITem from './commentRead.presenterItem'
import InfiniteScroll from "react-infinite-scroller";
import {ICommentReadUIProps} from './CommentRead.types'

export default function CommentReadUI(props:ICommentReadUIProps){

    return(
        <>
            <div style={{height:"500px", overflow:"auto"}}>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={props.onLoadMore}
                    hasMore={true}
                    useWindow={false}
                >
            {props.data?.fetchBoardComments.map((el:any) => (
                <CommentReadITem key={el._id} el={el} 
                onClickWhoWrite={props.onClickWhoWrite}
                FETCH_BOARD_COMMENTS={props.FETCH_BOARD_COMMENTS}
                isOpenModal={props.isOpenModal}
                onClickOpenModal={props.onClickOpenModal}
                onChangeDeletePassword={props.onChangeDeletePassword}
                onClickDelete={props.onClickDelete}
                handleCancel={props.handleCancel}
                deleteBoardComment={props.deleteBoardComment}
                />
            ))}
            </InfiniteScroll>
        </div> 
        </>
    )
}