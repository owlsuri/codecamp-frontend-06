import { useState } from 'react';

// 1. 문자타입
const getString = (arg: string): string => {
    return arg
}
const result1 = getString("철수")

// 2. 숫자타입
const getNumber = (arg: number): number => {
    return arg
}
const result2 = getNumber(123)

// 3. ant 타입
const getAny2 = (arg: any): any => {
    return arg
}
const result3_1 = getAny2("철수")
const result3_2 = getAny2(8)
const result3_3 = getAny2(true)

// 4. any 타입 2
const getAnys = (arg1:any, arg2:any, arg3:any):[any, any, any] =>{
    return [arg3, arg2, arg1]
}
const result4 = getAnys("철수", "다람쥐초등학교", 8)

// 5. generic 타입 - 뭔지는 모르겠지만 들어온 타입을 리턴할때도 그대로 사용 -> 리턴타입 예측 가능
function getGeneric<MyType>(MyType):MyType{
    return arg
}
const aaa:string = "철수"
const bbb:number= 8
const ccc: boolean = true

const result5_1 = getGeneric(aaa)
const result5_2 = getGeneric(bbb)
const result5_3 = getGeneric(ccc)


// 6. Generic 타입 2 - 한번 타입 들어오면 계속 그 타입으로 유지(any와 Generic의 차이점 - 리턴타입 예층 가능)
// prettier-ignore
function getGenerics<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3) : [MyType3, MyType2, MyType1]{

    return [ arg3, arg2, arg1 ]
    
}
const result6 = getGenerics("철수","다람쥐초등학교", 8)

// 7. Generic 축약 1
// prettier-ignore
function getGenericsT<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3) : [T3, T2, T1]{

    return [ arg3, arg2, arg1 ]
    
}
const result7 = getGenericsT("철수","다람쥐초등학교", 8)

// 8. Generic 축약 2
// prettier-ignore
function getGenericsTUV<T, U, V>(arg1: T, arg2: U, arg3: V) : [V, U, T]{

    return [ arg3, arg2, arg1 ]
    
}
const result8 = getGenericsTUV<string, string, number>("철수","다람쥐초등학교", 8)

// 9. useState에서의 Generic
// const [school, setSchool] = useState<string>("다람쥐초등학교")

// const apple: number = 3

// 10. 화살표 함수에서의 Generic
const getGenericsTUV2 = <T, U, V>(arg1: T, arg2: U, arg3: V) : [V, U, T] => {
    return [ arg3, arg2, arg1 ]    
}

