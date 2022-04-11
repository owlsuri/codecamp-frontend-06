import * as S from './openAPI.styles'


export default function OpenAPIUI(props){



    return(
        <S.Wrapper>
            <S.Title>서울시 따릉이 현황</S.Title>
            <S.Data>
                <S.Station>
                    <S.Label>따릉이 위치</S.Label>
                    {props.station?.map((el, index) => (
                    <S.Col key={index}>
                        <div>{el.slice(5,20)}</div>
                    </S.Col>
                    ))}
                </S.Station>
                <S.Bike>
                    <S.Label>이용가능한 따릉이</S.Label>
                    {props.bikeCnt.map((el, index) => (
                    <S.Col key={index}>
                        <div>{el}</div>
                    </S.Col>
                    ))}
                </S.Bike>
            </S.Data>
        </S.Wrapper>
    )
}