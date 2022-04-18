import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tooltip } from 'antd'
import * as S from './marketRead.styles'

export default function UsedItemReadUI(){

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
                2022.04.18
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
            <S.Remarks>2019 LTE 32G</S.Remarks>
        </S.TitleBox>


        </S.Wrapper>
    )

}