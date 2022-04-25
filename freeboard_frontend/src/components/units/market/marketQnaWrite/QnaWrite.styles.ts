// 댓글쓰기 스타일
import styled from "@emotion/styled";


export const Container= styled.div`
    width: 1000px;
    margin: 20px 100px 0px 0px;
`;
export const CommentBox= styled.div`

`;
export const CommentTitleBox= styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
`;
export const CommentTitle= styled.div`
    font-weight: 600;
    font-size: 18px;
    margin-left: 5px;
`;
export const Star= styled.div`
    margin-left: 20px;
`;
export const CommentInputBox= styled.div`
    width:990px;
    border: 1px solid #BDBDBD;
`;
export const CommentInput= styled.textarea`
    width: 985px;
    height: 108px;
    padding: 10px;
    border: 1px solid #bdbdbd;
    color: #bdbdbd;
    border: none;
`;
export const CommentInputBottom= styled.div`
    border-top: 1px solid #BDBDBE;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const CommentCount= styled.div`
padding: 12px 0 0 10px;
    width: 180px;
    height: 52px;
    color: #bdbdbd;
    font-size: 16px;
`
export const CommentInputBtn= styled.button`
    width: 91px;
    height: 52px;
    border: none;
    background-color: black;
    color: white;
    cursor: pointer;
`;
