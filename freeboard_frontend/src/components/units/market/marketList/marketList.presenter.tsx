import * as S from './marketList.styles'

export default function MarketListUI(props){

    console.log(props.data)
    return(
         <div>
          {props.data?.fetchUseditems
            .map((el:any, index:number) => (
              <S.Row key={el._id}>
                <S.ColumnNumber>{10 - index}</S.ColumnNumber>
                <S.ColumnTitle>{el.name}</S.ColumnTitle>
                <S.ColumnWriter>{el.remark}</S.ColumnWriter>
                <S.ColumnWriter>{el.price}</S.ColumnWriter>
                <S.ColumnWriter>{el.tags}</S.ColumnWriter>
              </S.Row>
            ))}
        </div>
    )
}