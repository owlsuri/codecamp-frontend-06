import { useQuery } from "@apollo/client";
import MarketListUI from "./marketList.presenter";
import { FETCH_USED_ITEMS } from "./marketList.queries";

export default function MarketList(){

    const { data, fetchMore } = useQuery(FETCH_USED_ITEMS)
    console.log(data)


    // 무한스크롤
    const onLoadMore = () => {
    if (!data) return;

    fetchMore({
    variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
    updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
        return { fetchUseditems: [...prev.fetchUseditems] };
        return {
        fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
        ],
        };
    },
    });
};


    return(
        <MarketListUI 
        data={data}
        onLoadMore={onLoadMore}/>
    )
}