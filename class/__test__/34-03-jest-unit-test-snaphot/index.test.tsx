// 하나하나 테스트할 수 없다보니 똑같은 내용을 카피해서 변경되면 변경사항이 맞는지 확인 알림 보냄
import JestUnitTestSnapPage from '../../pages/34-03-jest-unit-test-snapshot' 
import { render } from "@testing-library/react"

it("컴포넌트가 기존이랑 바뀐게 없는지 비교해보자-스냅샷테스트", ()=>{
    const result = render(<JestUnitTestSnapPage />)
    expect(result.container).toMatchSnapshot()  
})