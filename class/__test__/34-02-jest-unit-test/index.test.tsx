import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import JestUnitTestPage from "../../pages/34-02-jest-unit-test"

it("내가원하는대로 그려지는지 테스트하기",()=>{
    render(<JestUnitTestPage />)

    const myText1 = screen.getByText("철수는 13살입니다.")
    expect(myText1).toBeInTheDocument()

    const myText2 = screen.getByText("철수취미입력 :")
    expect(myText2).toBeInTheDocument()

    const myText3 = screen.getByText("철수랑 놀러가기")
    expect(myText3).toBeInTheDocument()
})