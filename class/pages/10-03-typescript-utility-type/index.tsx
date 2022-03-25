import { type } from "os"

export default function TypescriptPage(){


    interface IProfile {
        name: string
        age: number
        school: string
        hobby?: string
    }

    //1. pick 타입
    type Mytype1 = Pick<IProfile, "name" | "age">

    // 2. Omit
    type Mytype2 = Omit<IProfile, "school">
    //school만 빠짐

    //3. partial 타입
    type Mytype3 = Partial<IProfile>

    //4. REquired 타입
    type Mytype4 = Required<IProfile>
    //모두 필수로

    //5. Record 타입 
    type zzz = "aaa" | "qqq" | "rrr"  //유니온타입(합집합)
    // const appple:zzz
    // apple = "qqq"
    type Mytype5 = Record<zzz, IProfile> //zzz에 IProfile 추가. zzz가 키가되고 IProfile이 밸류가 됨


    //========추가(선언병합)========
    // type은 한번 만들면 끝
    // interface 는 같은 이름으로 또 만들 수 있다. 하나로 합쳐진다.

    interface IProfile{
        candy:number
    }

    let profile :IProfile
   
    profile={
        candy:3,
        age:3
    }

}