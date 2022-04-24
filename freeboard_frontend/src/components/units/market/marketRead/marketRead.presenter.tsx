import { HeartFilled } from '@ant-design/icons'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tooltip } from 'antd'
import { getDate } from '../../../../commons/libraries/utils'
import * as S from './marketRead.styles'
import Dompurify from 'dompurify'
import ImgSlick from '../../../../commons/imageSlick/imageslick'


export default function UsedItemReadUI(props){
console.log(props.data)
    return(
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
                <HeartFilled />
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
                <S.Btn>장바구니에 담기</S.Btn>
              </S.Buttons>
            </S.Info>
        </S.Container>
            <S.DetailBox>
              <S.Detail onClick={props.onClickShowDetail}>상품정보 자세히 보기</S.Detail>
              <S.Detail onClick={props.onClickQnA}>Q&A</S.Detail>
            </S.DetailBox>
            <S.ContentsDetail></S.ContentsDetail>
            <S.Qna></S.Qna>

      <S.MenuBox>
        <S.MenuBtn onClick={props.onClickList}>목록으로</S.MenuBtn>
        <S.MenuBtn onClick={props.onClickMoveEdit}>수정하기</S.MenuBtn>
        <S.MenuBtn onClick={props.onClickDelete}>삭제하기</S.MenuBtn>
      </S.MenuBox>
      </S.Wrapper>

    )

}