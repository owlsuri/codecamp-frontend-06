import Button01 from '../../../../commons/button/01'
import Input01 from '../../../../commons/inputs/01'
import Uploads01 from '../../../../commons/uploads/01/Uploads01.container'
import * as S from './marketWrite.styles'
import {v4 as uuidv4} from 'uuid'
import KakaoMap from '../../../../commons/kakaoMap/kakaoMap'
import { useEffect } from 'react'

export default function MarketWriteUI(props){
    // react-quill contents 값 넣어주기
    useEffect(() => {
        props.reset({ contents: props.data?.fetchUseditem.contents });
    }, [props.data]);

    return(
        <S.Wrapper>
            <S.Main >{props.isEdit ? "상품 수정하기" : "상품 등록하기"}</S.Main>
            <form onSubmit={props.handleSubmit(props.isEdit ? props.onClickUpdate : props.onClickSubmit)} >
            <S.Label>상품명 </S.Label>
            <Input01 
            mytype="text" register={props.register("name")}
                        defaultValue={props.data?.fetchUseditem.name || ""}   
                        placeholder="상품명을 작성해주세요." />
            <S.Error>{props.formState.errors.name?.message}</S.Error>

            <S.Label>한줄요약</S.Label>
            <Input01 mytype="text" register={props.register("remarks")} 
                    defaultValue={props.data?.fetchUseditem.remarks || ""}
                    placeholder="상품을 한줄로 요약해서 작성해주세요." defaultValues={props.data?.fetchUseditem.remarks}/>
            <S.Error>{props.formState.errors.remarks?.message}</S.Error>
            
            <S.Label>상품설명</S.Label>
            <div style={{height : "200px"}}>
            <props.ReactQuill 
            style ={{height:"75%"}}
            onChange={props.onChangeContents}  
            value={props.getValues("contents") || ""}/>
            </div>

            <S.Error>{props.formState.errors.contents?.message}</S.Error>
            
            <S.Label>판매가격</S.Label>
            <Input01 mytype="number" register={props.register("price")} 
                    defaultValue={props.data?.fetchUseditem.price || ""}
                    placeholder="판매가격을 입력주세요." />
            <S.Error>{props.formState.errors.price?.message}</S.Error>

            <S.Label>태그입력</S.Label>
            <Input01 mytype="text" register={props.register("tags")} 
                    defaultValue={props.data?.fetchUseditem.tags || ""}
                    placeholder="#태그 #태그 #태그" />
            <S.Error>{props.formState.errors.tags?.message}</S.Error>

            <S.LocationBox>
                <S.Location>
                    <S.Label>거래위치</S.Label>
                    {/* <KakaoMap /> */}
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
                          {/* {props.fileUrls.map((el, index) => (
                            <Uploads01
                            type="button"
                            key={uuidv4()}
                            index={index}
                            fileUrl={el}
                            onChangeFileUrls={props.onChangeFileUrls}
                            />
                        ))} */}
                        <input type="file" onChange={props.onChangeFile(0)}/>
                        <input type="file" onChange={props.onChangeFile(1)}/>
                        <input type="file" onChange={props.onChangeFile(2)}/><br/>
                        <img src={props.imageUrls[0]}/>
                        <img src={props.imageUrls[1]}/>
                        <img src={props.imageUrls[2]}/>
                <S.ImageBox>
                    
                </S.ImageBox>


            <Button01 isActive={props.formState.isValid} title={props.isEdit ? "수정하기" : "등록하기"} />
            </form>
    </S.Wrapper>
    )
}