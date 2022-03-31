import styled from "@emotion/styled";


    const MyRow = styled.div`
        display: flex;
    `;
    const MyColumn = styled.div`
        width: 200px;
        height: 40px;
    `;

export default function Board(props){



    return(
        
            <div>
            {props.data?.fetchBoards.map((el, _) => (
                <MyRow key={el.number}>
                <MyColumn>{el._id.slice(0, 4)}</MyColumn>
                <MyColumn> {el.writer}</MyColumn>
                <MyColumn>{el.title}</MyColumn>
                </MyRow>
            ))}
            </div>
    )
}