import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { basket } from "../../../../commons/store";
import MarketListUI from "./marketList.presenter";
import { FETCH_USED_ITEMS, FETCH_USED_ITEMS_BEST } from "./marketList.queries";
import _ from "lodash";

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
    const [basketItems, setBasketItems] = useRecoilState(basket);

    const onClickToDetail = (el) => (event) => {
        router.push(`/market/${event.currentTarget.id}`)

    // 최근 본 상품
    const watch = JSON.parse(localStorage.getItem("watch") || "[]");

    const { __typename, ...newEl } = el;
    watch.unshift(newEl);

    localStorage.setItem("watch", JSON.stringify(watch));
    const ddd = _.uniqBy(watch, "_id");
    const ccc = ddd.slice(0, 3);
    console.log(ccc);
    setBasketItems(ccc);  

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