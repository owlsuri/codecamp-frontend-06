import { useQuery } from '@apollo/client'
import MarketQnAListUI from './QnaList.presenter'
import { FETCH_USED_ITEM_QUESTIONS } from './QnaList.queries'

export default function MarketQnAList(){

    const {data} = useQuery(FETCH_USED_ITEM_QUESTIONS)

    return(<MarketQnAListUI 
    data={data}/>

    )
}