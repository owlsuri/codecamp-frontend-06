import { HeartFilled } from '@ant-design/icons'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tooltip } from 'antd'
import { getDate } from '../../../../commons/libraries/utils'
import * as S from './marketRead.styles'

export default function UsedItemReadUI(props){
console.log(props.data)
    return(
        <S.Wrapper>
            <S.WriterBox>
          <S.WriterSection>
            <FontAwesomeIcon icon={faCircleUser} size="3x" color="#BDBDBD" />
            <S.WriterInfo>
              <S.Writer>
                판매자
              </S.Writer>
              <S.CreateAt>
                {getDate(props.data ? props.data.fetchUseditem.createdAt : "loading...")}
              </S.CreateAt>
            </S.WriterInfo>
          </S.WriterSection>
    
    {/* 왼쪽상단 아이콘 */}
          <S.Icons>
            <S.Clip src="/movie.png" />
            <Tooltip title="">                    
            <S.Location src="/pin.png" />
            </Tooltip>
          </S.Icons>
        </S.WriterBox>

        <S.TitleBox>
            <div>
            <S.Remarks>{props.data ? props.data.fetchUseditem.remarks : "loading..."}</S.Remarks>
            <S.Name>{props.data ? props.data.fetchUseditem.name : "loading..."}</S.Name>
            </div>
            <S.Heart>
                <HeartFilled />
                <S.HeartNum>20</S.HeartNum>
            </S.Heart>
        </S.TitleBox>
        <S.Price>{props.data ? props.data.fetchUseditem.price : "loading..."}</S.Price>
        <S.Images></S.Images>
        <S.Contents>{props.data ? props.data.fetchUseditem.contents : "loading..."}</S.Contents>
        <S.Tags>{props.data ? props.data.fetchUseditem.tags : "loading..."}</S.Tags>
            {/* 하단 버튼 메뉴 박스 */}
      <S.MenuBox>
        <S.MenuBtn onClick={props.onClickList}>목록으로</S.MenuBtn>
        <S.MenuBtn onClick={props.onClickMoveEdit}>수정하기</S.MenuBtn>
        <S.MenuBtn onClick={props.onClickDelete}>삭제하기</S.MenuBtn>
      </S.MenuBox>

        </S.Wrapper>
    )

}