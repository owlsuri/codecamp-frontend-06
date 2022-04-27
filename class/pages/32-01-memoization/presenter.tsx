import { memo } from 'react'

function MemoizationPresenterPage(props){
    console.log("프리젠터가 렌더링됩니다!")
    return(
        <div>
            <div>=============================</div>
            <h1>여기는 프리젠터 입니다!</h1>
            <div>=============================</div>
        </div>
    )
}

export default memo(MemoizationPresenterPage);
// memo도 하이오더컴포넌트
// 다시 그리지 않고 메모장에 있는 것 가져다 씀