import { useState } from "react"

// 해시태그 
const HashTagPage = () => {
  
  const [hashTag, setHashTag] = useState("")
  const [hashArr, setHashArr] = useState([])
  
  const onKeyUpHash = (event) =>{
    
    if(event.keyCode === 32 && event.target.value !==" "){
      // 32번은 스페이스바
      setHashArr((...hashArr, "#"event.target.value))
    }
  }
  return(
  <>
        <div>
            <span>
            {hashArr.map((el, idx) => {
            <span key={idx}>{el}</span>
                })}
            </span>
            <input type="text" onKeyUp={onKeyUpHash} />
        </div>    
    </>
)
}