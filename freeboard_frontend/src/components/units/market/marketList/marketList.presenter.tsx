import * as S from './marketList.styles'
import InfiniteScroll from "react-infinite-scroller";
import { HeartFilled } from '@ant-design/icons'

export default function MarketListUI(props){

    console.log(props.dataUseditemBest)
    return(
      <>
           <S.Main>중고마켓 BEST</S.Main>
           <S.Wrapper>
           <S.BestBox>
              {props.dataUseditemBest?.fetchUseditemsOfTheBest.map((el:any)=>(
                <S.Row key={el._id}  id={el._id} onClick={props.onClickToDetail}>
                      <S.Info>
                        <div>
                            <S.Img  
                              id={el._id}
                              src={
                                el.images[0]
                                  ? `https://storage.googleapis.com/${el.images?.[0]}`
                                  : `/images/leaves.png`
                              }/>
                  <S.ItemInfo>
                    <div>
                          <S.Remarks>{el.remarks}</S.Remarks>
                          <S.Name>{el.name}</S.Name>
                          <S.Price>{el.price}</S.Price>
                          <S.Tags>{el.tags}</S.Tags>
                          </div>
                      <S.Heart>
                          <HeartFilled />
                          <S.HeartNum>{el.pickedCount}</S.HeartNum>
                      </S.Heart>
                  </S.ItemInfo>
                        </div>
                      </S.Info>
                    </S.Row>
              ))}
           </S.BestBox>
           </S.Wrapper>
         <S.Wrapper>
           <InfiniteScroll
                    pageStart={0}
                    loadMore={props.onLoadMore}
                    hasMore={true}
                >
           <S.Container>
                {props.data?.fetchUseditems.map((el:any) => (
                  <S.Row key={el._id}  id={el._id} onClick={props.onClickToDetail}>
                      <S.Info>
                        <div>
                            <S.Img  
                              id={el._id}
                              src={
                                el.images[0]
                                  ? `https://storage.googleapis.com/${el.images?.[0]}`
                                  : `/images/leaves.png`
                              }/>
                  <S.ItemInfo>
                    <div>
                          <S.Remarks>{el.remarks}</S.Remarks>
                          <S.Name>{el.name}</S.Name>
                          <S.Price>{el.price}</S.Price>
                          <S.Tags>{el.tags}</S.Tags>
                          </div>
                      <S.Heart>
                          <HeartFilled />
                          <S.HeartNum>{el.pickedCount}</S.HeartNum>
                      </S.Heart>
                  </S.ItemInfo>
                        </div>
                      </S.Info>
                    </S.Row>
                  ))}
            </S.Container>
            </InfiniteScroll>
        </S.Wrapper>
        </>
    )
}