import styled from '@emotion/styled'

    const MyRow = styled.div`
    display: flex;
    `
    const MyColumn = styled.div`
    /* width: 100%; */
    `

export default function Board(props){



    return(
        <div>
            {props.data?.fetchBoards.map((el,_) => (
            <MyRow key={el._id}>
                {/* 키는 고유한 것 */}
                <MyColumn>{el._id.slice(0,4)}</MyColumn>
                <MyColumn> {el.writer}</MyColumn>
                <MyColumn>{el.title}</MyColumn>
                {/* index는 map이 실행시켜준 순서 */}
                {/* <div>내용 : {el.contents}</div> */}
            </MyRow> 
            ))}
        </div>
            
    )
}