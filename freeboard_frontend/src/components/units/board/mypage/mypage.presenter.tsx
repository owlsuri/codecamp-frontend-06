import * as S from './mypage.styles'

export default function LoginSuccessUI(props){

    return(
    <>
        <div>{props.data?.fetchUserLoggedIn.name}님 환영합니다!!</div>
        <br/><br/>
        <h2> 포인트 충전하기</h2>
        <div>보유금액 : {props.data?.fetchUserLoggedIn.userPoint.amount}원</div>
         <br/>
                <select id="option" onChange={props.onChangeOption}>                                        
                <option selected disabled>충전할 금액을 선택하세요</option>
                <option value="1000">1000</option>
                <option value="3000">3000</option>
                <option value="5000">5000</option>
                <option value="7000">5000</option>
                <option value="10000">10000</option>
            </select>
            <button onClick={props.requestPay}>충전하기</button>
<br/><br/>
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