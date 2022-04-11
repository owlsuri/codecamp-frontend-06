export default function MapElPage(){
    // 1. 기본 방법
    ["철수", "영희", "훈이"].map((asd, qwe) => {
        console.log("asd:", asd)
        console.log("qwe", qwe)
    })

    // 2. 매개변수 변경한 방법
    ["철수", "영희", "훈이"].map((asd, qwe) => {
        console.log("asd:", asd)
        console.log("qwe", qwe)
    })

    // 3. 함수 선언식 방법
    ["철수", "영희", "훈이"].map(function(asd, qwe){
        console.log("asd:", asd)
        console.log("qwe", qwe)
    })

    // 4. el과 index 바꾸기
    ["철수", "영희", "훈이"].map((index, el) => {
        console.log("el:", el)
        console.log("index", index)
    })



    return(
        <div>el 알아보기</div>
    )
}