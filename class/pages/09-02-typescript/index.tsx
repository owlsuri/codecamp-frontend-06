export default function TypescriptPage(){

    let aaa="안녕하세요"
    //꼭 적지 않아도 지동으로 처음 들어간 값으로 타입 추론-다음부턴 이 타입만 넣을 수 있음
    aaa=3

    //타입명시
    let bbb: string = "반갑습니다"

    //문자타입
    let ccc: string  //만들어만놓고 나중에 넣는 것 가능 > 타입 맞아야함
    ccc=3

    let ddd:number = 10
    ddd="qweqwe"

    let eee:boolean = true  //true false만 가능 
    eee = "false"  // "true"는 string - 값이 있으므로 true로 작동함

    //배열타입
    let fff: number[] = [1,2,3,4,5, "안녕"]
    let ggg: string[] = ["철수", "영희", 13]
    //숫자와 문자 함께있는 배열
    let hhh:( number | string )[] =[1,2,3,4,5, "안녕"]
    
    //객체타입
    let profile = {
        name : "철수",
        age : 8,
        school:"다람쥐초등학교"
    }

    profile.age = "8살"  //이미 타입이 추론이 되었으면 못바꿈 바꾸려면 명시해주어야함

    interface IProfile{
        name : string
        age : string | number
        school : string
        hobby?:string   //필수 아닐때는 ? 붙여줌
    }
        let profile2:IProfile = {
        name : "철수",
        age : 8,
        school:"다람쥐초등학교"
    }

    profile2.age = "8살"

    // 함수타입
    const add = (money1: number, money2:number, unit:string): string => {    //:리턴타입 
        return money1 + money2 + unit
    }
    add(1000,2000,"원") //함수는 받는쪽에서 함수를 결정함

    
    return <div>타입스트립트 연습하기!!</div>
}