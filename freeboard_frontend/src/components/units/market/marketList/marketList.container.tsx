import { useQuery } from "@apollo/client";
import MarketListUI from "./marketList.presenter";
import { FETCH_USED_ITEMS } from "./marketList.queries";

export default function MarketList(){

    const { data } = useQuery(FETCH_USED_ITEMS)
    console.log(data)


    return(
        <MarketListUI 
        data={data}/>
    )
}