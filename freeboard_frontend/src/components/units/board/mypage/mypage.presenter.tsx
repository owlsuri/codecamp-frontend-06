import * as S from './mypage.styles'

export default function LoginSuccessUI(props){

    return(
    <>
        <div>{props.data?.fetchUserLoggedIn.name}님 환영합니다!!</div>

    <h2>장바구니</h2>
      <div>
          <S.MyRow>
            <S.MyColumn>상품명</S.MyColumn>
            <S.MyColumn>가격</S.MyColumn>
          </S.MyRow>
        {props.basketItems?.map((el:any) => (
          <S.MyRow key={el._id}>
            <S.MyColumn> {el.name}</S.MyColumn>
            <S.MyColumn>{el.price}</S.MyColumn>
          </S.MyRow>
        ))}
      </div>

    </>
    )
}