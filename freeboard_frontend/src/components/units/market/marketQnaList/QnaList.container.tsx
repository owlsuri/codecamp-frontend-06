import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import MarketQnAListUI from './QnaList.presenter'
import { FETCH_USED_ITEM_QUESTIONS } from './QnaList.queries'

export default function MarketQnAList(){

    const router = useRouter()

    const {data} = useQuery(FETCH_USED_ITEM_QUESTIONS,{
        variables:{ useditemId: router.query.useditemId  }
    })

    return(<MarketQnAListUI 
    data={data}/>

    )
}