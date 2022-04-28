import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import MarketListUI from "./marketList.presenter";
import { FETCH_USED_ITEMS, FETCH_USED_ITEMS_BEST } from "./marketList.queries";

export default function MarketList(){

    const { data, fetchMore, refetch } = useQuery(FETCH_USED_ITEMS)
    const { data: dataUseditemBest } = useQuery(FETCH_USED_ITEMS_BEST)
    const router = useRouter()

    const [keyword, setKeyword] = useState("")

    const onClickNew = () =>{
        router.push('market/new')
    }

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

    const onClickToDetail = (event) => {
        router.push(`/market/${event.currentTarget.id}`)
    }

    const onChangeKeyword = (value: string) => {
        setKeyword(value);
    }


    return(
        <MarketListUI 
        data={data}
        onLoadMore={onLoadMore}
        onClickToDetail={onClickToDetail}
        dataUseditemBest={dataUseditemBest}
        onChangeKeyword={onChangeKeyword}
        refetch={refetch}
        keyword={keyword}
        onClickNew={onClickNew}
        />
    )
}