import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
  font-weight: 600;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
  font-weight: 600;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
`;
