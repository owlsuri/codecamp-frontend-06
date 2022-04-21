
export default function EventLoop(){

    const onClickTimer = () =>{
        console.log("===========시작===========")
        setTimeout(() => {
            console.log("0초뒤에 실행될거에요!")
        }, 0);
        console.log("===========끝===========")
    }

    return(
        <button onClick={onClickTimer}>setTimeout 실행시키기!!!</button>
    )
}