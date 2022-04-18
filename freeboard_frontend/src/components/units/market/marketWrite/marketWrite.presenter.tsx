import Button01 from '../../../../commons/button/01'
import Input01 from '../../../../commons/inputs/01'
import Input02 from '../../../../commons/inputs/02'
import * as S from './marketWrite.styles'

export default function MarketWriteUI(props){

    return(
        <S.Wrapper>
            <S.Main>상품 등록하기</S.Main>
            <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
            <S.Label>상품명 </S.Label>
            <Input01 mytype="text" register={props.register("name")} placeholder="상품명을 작성해주세요." />
            <S.Error>{props.formState.errors.itemName?.message}</S.Error>

            <S.Label>한줄요약</S.Label>
            <Input01 mytype="text" register={props.register("remarks")} placeholder="상품을 한줄로 요약해서 작성해주세요." />
            <S.Error>{props.formState.errors.item?.message}</S.Error>
            
            <S.Label>상품설명</S.Label>
            <Input02 mytype="textArea" register={props.register("contents")} placeholder="상품을 설명해주세요." />
            <S.Error>{props.formState.errors.itemDesc?.message}</S.Error>
            
            <S.Label>판매가격</S.Label>
            <Input01 mytype="text" register={props.register("price")} placeholder="판매가격을 입력주세요." />
            <S.Error>{props.formState.errors.contents?.message}</S.Error>

            <S.Label>태그입력</S.Label>
            <Input01 mytype="text" register={props.register("tags")} placeholder="판매가격을 입력주세요." />
            <S.Error>{props.formState.errors.contents?.message}</S.Error>

            <S.LocationBox>
                <S.Location>
                    <S.Label>거래위치</S.Label>
                    <S.LocationImg></S.LocationImg>
                </S.Location>
                <S.AddressBox>
                    <S.GpsBox>
                        <S.Label>GPS</S.Label>
                        <S.Gps type="text" placeholder="위도(LAT)" />
                        <S.Gps type="text" placeholder="경도(LNG)" />
                    </S.GpsBox>
                    <div>
                        <S.Label>주소</S.Label>
                        <S.Address type="text" />
                        <S.Address type="text" />
                    </div>
                </S.AddressBox>
            </S.LocationBox>
                <S.Label>사진첨부</S.Label>
                <S.ImageBox>
                    
                </S.ImageBox>


            <Button01 isActive={props.formState.isValid} title="등록하기" />
            </form>
    </S.Wrapper>
    )
}