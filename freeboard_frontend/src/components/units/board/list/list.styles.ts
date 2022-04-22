// 게시물 리스트 스타일

import styled from '@emotion/styled'
import {LikeOutlined} from '@ant-design/icons'


export const Wrap = styled.div`
  width: 1200px;
  padding: 100px;
`;
export const BoardTitle = styled.div`
font-size: 30px;
font-weight: 600;
padding: 0 0 30px 500px;
`;
export const BestCreatedAt = styled.div`
  font-size: 12px;
  color: #828282;
  padding-top: 5px;
`;
export const BestBoards = styled.div`
width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;
export const BestBox = styled.div`
  background: #FFFFFF;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  cursor: pointer;
`;
export const BestInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;
export const BestLike = styled.div`
  color:#6888B2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const BestLikeIcon = styled(LikeOutlined)`
  font-size:20px;
`;
export const BestLikeNum = styled.div`
  color: black;
  font-size: 11px;
`;
export const BestImg = styled.img`
  width: 220px;
  height: 110px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
export const BestOne = styled.div`
  width: 220px;
  height: 110px;
  padding: 10px 15px 10px 15px;
  `;
export const BestWriterImg = styled.img`
  width: 20px;
  height: 20px;
`;
export const BestWriterBox = styled.div`
  display: flex;
  align-items: center;
`;
export const BestWriter = styled.div`
  font-size: 16px;
  padding-left: 10px;
`;
export const BestTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Word = styled.span`
    color: ${(props) => (props.isMatched ? "orange" : "")};
`
export const LineTop = styled.div`
  border-bottom: 1px solid black;
  width: 1200px;
`;
export const ColumnTitleTH = styled.div`
  width: 500px;
  text-align: center;
  font-weight: 700;
`;
export const ColumnNumberTH = styled.div`
  width: 120px;
  text-align: center;
  font-weight: 700;
`;
export const ColumnWriterTH = styled.div`
  width: 300px;
  text-align: center;
  font-weight: 700;
`;
export const ColumnDateTH = styled.div`
  width: 200px;
  text-align: center;
  font-weight: 700;
`;
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
export const ThRow = styled.div`
  height: 30px;
  width: 1200px;
  
  display: flex;
  border-bottom: 1px solid #bdbdbd;

  align-items: center; 
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
export const LineBottom = styled.div`
  border-bottom: 1px solid black;
  width: 1200px;
`;
export const CreateBtn = styled.button`
  background-color: white;
  width: 171px;
  height: 50px;
  border-radius: 15px;
  border: 1px solid gray;
  :hover{
    background-color: #6888B2;
    color: white;
    cursor: pointer;
  }
`;
export const btnBox = styled.div`
  padding-top: 30px;
  width: 1200px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
