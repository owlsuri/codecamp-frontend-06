import axios from "axios"

export default function CallbackPromiseAsyncAwaitPage(){

    const onClickCallback = () =>{
        const aaa = new XMLHttpRequest()
        aaa.open("get", "http://numbersapi.com/random?min=1&max=200")
        aaa.send()
        aaa.addEventListener("load", (res) => {
            const num = res.target.response.split(" ")[0]
            
            const bbb = new XMLHttpRequest()
            bbb.open("get", `http://koreanjson.com/${num}`)
            bbb.send()
            bbb.addEventListener("load", ()=>{
                const userId = res.target.response.UserId  
                
                const ccc = new XMLHttpRequest()
                ccc.open("get",`http://koreanjson.com/${userId}` )
                ccc.send()
                ccc.addEventListener("load", (res) => {
                    console.log(res) // 최종 결과값!
                })
            })
        })
    }

    // new Promise((resolve, reject) => {

    //     // 외부 요청코드
    //             const ccc = new XMLHttpRequest()
    //             ccc.open("get",`http://koreanjson.com/${userId}` )
    //             ccc.send()
    //             ccc.addEventListener("load", (res) => {
    //                 console.log(res) // 최종 결과값!
    //             })

    //     // 성공
    //     // resolve("수리")

    //     // 실패
    //     // reject("에러발생")

    // }).then((res) => {}).catch(err => {})

    const onClickPromise = () =>{
        console.log('여기는 1번')
        axios
            .get("http://numbersapi.com/random?min=1&max=200")
            .then((res) => {
                console.log('여기는 2번')
                const num = res.data.split(" ")[0]; // 71(랜덤숫자)
                return axios.get(`http://koreanjson.com/posts/${num}`);
            })
            .then((res) => {
                console.log('여기는 3번')
                const userId = res.data.UserId;
                return axios.get(`http://koreanjson.com/posts?userId=${userId}`)
            })
            .then((res) => {
                console.log('여기는 4번')
                console.log(res);
            });
            console.log('여기는 5번')
                // 프로미스 체이닝
            }
            

    

    const onClickAsyncawait = async() =>{
        const aaa = await axios.get("http://numbersapi.com/random?min=1&max=200")

        const bbb = await axios.get("http://numbersapi.com/random?min=1&max=200")

        const ccc = await axios.get("http://numbersapi.com/random?min=1&max=200")
    }


    return(
        <div>
            <button onClick={onClickCallback}>Callback 요청하기</button>
            <button onClick={onClickPromise}>Promise 요청하기</button>
            <button onClick={onClickAsyncawait}>Async 요청하기</button>
        </div>
    )
}