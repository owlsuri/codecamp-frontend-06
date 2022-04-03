// 무한스크롤
import { useQuery, gql } from "@apollo/client";
import styled from '@emotion/styled'
import InfiniteScroll from 'react-infinite-scroller';

const FETCH_BOARDS = gql`
    query fetchBoard($page:Int) {
        fetchBoards(page:$page){
        _id
        writer
        title
        contents
        }
    }
    `;

const MyRow = styled.div`
    display: flex;
`
const MyColumn = styled.div`
    width: 25%;
`


export default function staticRoutedPage() {
    const { data, fetchMore } = useQuery(FETCH_BOARDS)

    // 추가로 다음 10개 패치
    const onLoadMore = () =>{
        if(!data) return;

        fetchMore({
            variables : { page: Math.ceil(data.fetchBoards.length / 10) + 1},  // 현재페이지 +1 해서 다음페이지를 요청
            updateQuery:(prev, { fetchMoreResult }) =>{
                if(!fetchMoreResult.fetchBoards) return {fetchBoards : [...prev.fetchBoards]}
                return {
                    fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards]
                }
            }
        })

    }

    return (
    <div style={{height:"700px", overflow:"auto"}}>
        <InfiniteScroll
            pageStart={0}
            loadMore={onLoadMore}
            hasMore={true}
            useWindow={false}
        >        
                {data?.fetchBoards.map((el, index) => (
                    <MyRow key={el._id}>
                        <MyColumn>{el._id}</MyColumn>
                        <MyColumn> {el.writer}</MyColumn>
                        <MyColumn>{el.title}</MyColumn>
                        <MyColumn>{index}</MyColumn>
                    </MyRow>
                    )) || "Loading" }
        </InfiniteScroll>
        </div>
    );
}