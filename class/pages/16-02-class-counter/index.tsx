import { Component } from "react";

interface IState{
    count:number
}

export default class CounterPage extends Component {
    
    state = {
        count: 0
    }

    // onClickCounter = () => {
    //     console.log(this.state.count)
    //     // this는 누가 실행을 시켰느냐에 따라 달라짐. - 매번 달라지는 동적 스코프 
    //     // 화살표함수에서는 바뀌지않는데, 이땐 랙시컬(언어적인 스코프) this라고 한다.
    //     // 함수를 화살표 함수로 바꿔주면 해결 가능
    //     this.setState((prev:IState) =>({
    //         count: prev.count + 1,
    //     }))
    // }

        onClickCounter () {
        console.log(this.state.count)
        // this는 누가 실행을 시켰느냐에 따라 달라짐. - 매번 달라지는 동적 스코프 
        // 화살표함수에서는 바뀌지않는데, 이땐 랙시컬(언어적인 스코프) this라고 한다.
        // 함수를 화살표 함수로 바꿔주면 해결 가능
        this.setState((prev:IState) =>({
            count: prev.count + 1,
        }))
    }

    render(){
        return(
            <div>
                <div>현재카운트 : {this.state.count}</div>
                <button onClick={this.onClickCounter.bind(this)}>카운트 올리기!!</button>
            </div>
        ) 
    }
}