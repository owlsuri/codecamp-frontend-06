// 게시물 상세보기 페이지

import BoardRead from "../../../src/components/units/board/detail/read.container";
import CommentPage from "../../../src/components/units/board/commentWrite/commentWrite.container";
import CommentRead from "../../../src/components/units/board/commentRead/commentRead.container";

export default function boardDetail() {



    return (
    <div>
        <BoardRead />
        <CommentPage />        
        <CommentRead />
    </div>
    )
}
