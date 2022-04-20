import styled from "@emotion/styled";

export const ColumnTitle = styled.div`
  width: 500px;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ColumnNumber = styled.div`
  width: 120px;
  text-align: center;
`;
export const ColumnWriter = styled.div`
  width: 300px;
  text-align: center;
`;
export const ColumnDate = styled.div`
  width: 200px;
  text-align: center;
`;
export const Row = styled.div`
  height: 30px;
  width: 1200px;
  
  display: flex;
  border-bottom: 1px solid #bdbdbd;

  align-items: center;  
  :hover{
    color:#6888B2;
    font-weight: 600;
    cursor: pointer;
  }
`;