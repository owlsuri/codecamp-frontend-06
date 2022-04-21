
export default function EventLoop(){

    const onClickTimer = () =>{
        console.log("===========시작===========")
        setTimeout(() => {
            console.log("0초뒤에 실행될거에요!")
        }, 0);
        console.log("===========끝===========")

    let sum = 0;
        for (let i = 0; i <= 9000000000; i += 1) {
        sum = sum + 1;
    }
    }

    return(
        <button onClick={onClickTimer}>setTimeout 실행시키기!!!</button>
    )
}