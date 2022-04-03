// 게시물 상세보기 페이지

import BoardRead from "../../../src/components/units/board/detail/read.container";
import CommentWrite from "../../../src/components/units/board/commentWrite/commentWrite.container";
import CommentRead from "../../../src/components/units/board/commentRead/commentRead.container";

import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

export default function boardDetail() {



    return (
    <div>
        <CssBaseline />
        <BoardRead />
        <CommentWrite isCommentEdit={false} />        
        <CommentRead />
    </div>
    )
}
