import { Fragment } from 'react'
import * as S from './navigation.styles'
import { ILayoutUI } from './navigation.typse'


export default function LayoutNavigationUI(props:ILayoutUI){

    const NAVIGATION_MEMUS = [
        { name: "BOARDS", page: "/boards"},
        { name: "PRODUCTS", page: "/markets"},
        { name: "FireBase", page: "/fireBase"},       
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