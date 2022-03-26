
import BoardRead from "../../../src/components/units/board/detail/read.container";
import React from "react";
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
