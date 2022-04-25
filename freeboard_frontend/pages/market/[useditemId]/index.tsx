import MarketQnAList from "../../../src/components/units/market/marketQnaList/QnaList.container";
import UsedItemRead from "../../../src/components/units/market/marketRead/marketRead.container";
import QnaWrite  from '../../../src/components/units/market/marketQnaWrite/QnaWrite.container'

export default function UsedItemReadPage(){

    return(
        <>
        <UsedItemRead />
        <QnaWrite />
        <MarketQnAList />
        </>
    )

}