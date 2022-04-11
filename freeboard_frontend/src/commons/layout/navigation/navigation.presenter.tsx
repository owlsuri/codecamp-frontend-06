import { Fragment } from 'react'
import * as S from './navigation.styles'
import { ILayoutUI } from './navigation.typse'


export default function LayoutNavigationUI(props:ILayoutUI){

    const NAVIGATION_MEMUS = [
        { name: "수다방", page: "/boards"},
        { name: "중고거래", page: "/markets"},
        { name: "한줄맛집", page: "/fireBase"},
        { name: "따릉이", page: "/plusPage"},        
        { name: "MY PAGE", page: "/mypage"}, 
    ]

    return(
        <S.Wrapper>
            {NAVIGATION_MEMUS.map((el) =>(
                <Fragment key={el._id}>
                    <S.MenuItem id={el.page} onClick={props.onClickMenu}>
                        {el.name}
                    </S.MenuItem>
                </Fragment>
            ))}

        </S.Wrapper>
    )
}