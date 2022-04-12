// 글로벌 스테이트
import { atom } from 'recoil'

export const isEditState = atom({
    key: "isEditState", 
    default: false, 
})

export const accessTokenState = atom({
    key: "accessTokenState", 
    default:"", 
})