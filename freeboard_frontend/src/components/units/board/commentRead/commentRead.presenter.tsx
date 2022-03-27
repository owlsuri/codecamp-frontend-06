// 댓글 보여주기 프레젠터

import { getDate } from "../../../../commons/libraries/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faX } from "@fortawesome/free-solid-svg-icons";
import * as S from './commentRead.styles'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ICommentReadUIProps } from './CommentRead.types'


import Rating from '@material-ui/lab/Rating';
import { useState } from "react";



export default function CommentReadUI(props:ICommentReadUIProps){


    return(
        <div>
            {props.data?.fetchBoardComments
            .map((el:any) => (
            <S.Container key={el._id}>        
                <S.CommentShowBox >                
                    <S.CommentUserImg>
                       <AccountCircleIcon fontSize="large" color="disabled" />
                    </S.CommentUserImg>
                    <S.CommentDescBox>           
                        <S.CommentUserInfo>
                            <S.CommentUserProfile>
                            <S.CommentUserName>{el.writer}</S.CommentUserName>
                            {/* 별 */}
                            <div style={{ display: 'block', paddingLeft: 10 }}>
                                <Rating
                                name="Rating Label"
                                value={props.rating}
                                onChange={(event, newValue) => {
                                    props.setRating(Number(newValue));
                                }}
                                />
                            </div>
                            </S.CommentUserProfile>
                            <S.CommentIcon>
                            <FontAwesomeIcon onClick={props.onClickToEdit} icon={faPencil}  color="#BDBDBD" />
                            <FontAwesomeIcon onClick={props.onClickDelete} icon={faX} color="#BDBDBD" />
                            </S.CommentIcon>
                        </S.CommentUserInfo>
                        <S.CommentDesc>
                            <S.Comment>{el.contents}</S.Comment>
                            <S.CommentDate>{getDate(el.createdAt)}</S.CommentDate>
                        </S.CommentDesc>
                    </S.CommentDescBox>                 
                </S.CommentShowBox>               
            </S.Container>
            ))}
        </div>
    )
}