// 글로벌 스테이트
import { atom } from 'recoil'

export const accessTokenState = atom({
    key: "accessTokenState", 
    default:"", 
})

// 장바구니
export const basket = atom({
    key: "basketItems", 
    default:[], 
})

// 최근본상품
export const watch = atom({
    key: "watch", 
    default:[], 
})