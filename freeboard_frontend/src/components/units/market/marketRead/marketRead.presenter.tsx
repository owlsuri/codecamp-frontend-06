import { HeartFilled } from '@ant-design/icons'
import * as S from './marketRead.styles'
import Dompurify from 'dompurify'
import ImgSlick from '../../../../commons/imageSlick/imageslick'
import MarketQnAList from '../marketQnaList/QnaList.container'
import QnaWrite from '../marketQnaWrite/QnaWrite.container'
import { useState } from 'react'
import MarketWrite from '../marketWrite/marketWrite.container'
import KakaoMapFetchPage from '../../../../commons/kakaoMapFetch/kakaomap.container'


export default function UsedItemReadUI(props){
  
  const [isEdit, setIsEdit]=useState(false)

console.log(props.data)
    return(
      <>
      {!isEdit && (
      <S.Wrapper>
        <S.Container>
          {/* 이미지 캐러셀 */}
          <S.Images>   
            <ImgSlick data={props.data}/>
          </S.Images>
            <S.Info>
              <S.Infos>
              <div>
              <S.Remarks>{props.data ? props.data?.fetchUseditem.remarks : "loading..."}</S.Remarks>
              <S.Name>{props.data ? props.data?.fetchUseditem.name : "loading..."}</S.Name>
              <S.Price>{props.data ? props.data?.fetchUseditem.price : "loading..."}원</S.Price>
              </div>
              <S.Heart>
                <HeartFilled onClick={props.onClickPick} />
                <S.HeartNum>{props.data?.fetchUseditem.pickedCount}</S.HeartNum>
              </S.Heart>
              </S.Infos>
              <S.Contents>
               {typeof window !== "undefined" && (<div dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
            }}/>)}
            </S.Contents>
               <S.Tags>{props.data ? props.data?.fetchUseditem.tags : "loading..."}</S.Tags>
              <S.Buttons>
                <S.Btn onClick={props.onClickPay}>결제하기</S.Btn>
                <S.Btn onClick={props.onClickBasket(props.data?.fetchUseditem)}>장바구니에 담기</S.Btn>
              </S.Buttons>
            </S.Info>
        </S.Container>
            <S.DetailBox>    
                <S.Detail color={props.color} onClick={props.onClickShowDetail}>상품정보 자세히 보기</S.Detail>
                <S.Qna qnaColor={props.qnaColor} onClick={props.onClickQnA}>Q&A</S.Qna>
                  
              {props.isShowQnA ? (
                <div>
                <QnaWrite />
                <MarketQnAList />
                </div>
              ) : (
                <>
                <div>
                  {props.data?.fetchUseditem.images
                                    ?.filter((el: string) => el)
                                    .map((el: string) => (
                                      <S.DetailImg
                                      key={el}
                                      src={`https://storage.googleapis.com/${el}`}
                                      />
                                      ))}
                                  
                  </div>
                  <S.Label><S.Pin src="/pin.png" />거래장소</S.Label>
                  <KakaoMapFetchPage data={props.data}/>
                  </>
            )}
            </S.DetailBox>
            <S.ContentsDetail></S.ContentsDetail>

      <S.MenuBox>
        <S.MenuBtn onClick={props.onClickList}>목록으로</S.MenuBtn>
        <S.MenuBtn onClick={props.onClickMoveEdit}>수정하기</S.MenuBtn>
        <S.MenuBtn onClick={props.onClickDelete}>삭제하기</S.MenuBtn>
      </S.MenuBox>
      </S.Wrapper>
      )}

      {isEdit && <MarketWrite isEdit={true} data={props.data} setIsEdit={setIsEdit} /> }
    </>
    )
}