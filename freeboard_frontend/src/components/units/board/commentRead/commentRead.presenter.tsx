// 댓글 보여주기 프레젠터

import { getDate } from "../../../../commons/libraries/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faPencil, faX } from "@fortawesome/free-solid-svg-icons";
import * as S from './commentRead.styles'

export default function CommentReadUI(props){


    return(
        <S.Container>
                {/* 내용 보여주는 부분 */}
            <S.CommentShowBox>
                <S.CommentUserImg>
                    <FontAwesomeIcon icon={faCircleUser} size="3x" color="#BDBDBD" />
                </S.CommentUserImg>
                <S.CommentDescBox>           
                    <S.CommentUserInfo>
                        <S.CommentUserProfile>
                        <S.CommentUserName>{props.data ? props.data.fetchBoardComments.writer : "loading..."}</S.CommentUserName>
                        <S.CommentStar>⭐⭐⭐⭐⭐</S.CommentStar>
                        </S.CommentUserProfile>
                        <S.CommentIcon>
                        <FontAwesomeIcon icon={faPencil}  color="#BDBDBD" />
                        <FontAwesomeIcon icon={faX} color="#BDBDBD" />
                        </S.CommentIcon>
                    </S.CommentUserInfo>
                    <S.CommentDesc>
                        <S.Comment>{props.data ? props.data.fetchBoardComments.contents : "loading..."}</S.Comment>
                        <S.CommentDate>{getDate(props.data ? props.data.fetchBoardComments.createdAt : "loading...")}</S.CommentDate>
                    </S.CommentDesc>
                </S.CommentDescBox> 
            </S.CommentShowBox>        
        </S.Container>
    )
}