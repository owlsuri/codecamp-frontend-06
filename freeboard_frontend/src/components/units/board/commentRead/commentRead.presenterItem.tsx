// 댓글 리스트 프레젠터 아이템 

import { getDate } from "../../../../commons/libraries/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faX } from "@fortawesome/free-solid-svg-icons";
import * as S from './commentRead.styles'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Rate, Modal } from 'antd';
import { useState, MouseEvent  } from "react";
import CommentWrite from "../commentWrite/commentWrite.container";
import {ICommentReadItemProps} from './CommentRead.types'



export default function CommentReadItem(props:ICommentReadItemProps){

    const [isCommentEdit, setIsCommentEdit] = useState(false)

    // 댓글 수정하기 버튼
    const onClickToEdit = (event:MouseEvent<SVGSVGElement>) => {
        setIsCommentEdit(true);
    }

    return(
        <>
            {props.isOpenModal && (
                <Modal visible={true} onOk={props.onClickDelete} onCancel={props.handleCancel}>
                <div>비밀번호 : </div>
                <S.PasswordInput
                    type="password"
                    onChange={props.onChangeDeletePassword}
                />
                </Modal>
            )}
        {/* isCommentEdit={false} */}
        {!isCommentEdit && (                
                <S.Container key={props.el?._id} id={props.el?.writer} onClick={props.onClickWhoWrite} >        
                    <S.CommentShowBox >                
                        <S.CommentUserImg>
                            <AccountCircleIcon fontSize="large" color="disabled" />
                        </S.CommentUserImg>
                        <S.CommentDescBox>           
                            <S.CommentUserInfo>
                                <S.CommentUserProfile>
                                <S.CommentUserName>{props.el?.writer}</S.CommentUserName>
                                {/* 별 */}
                                <S.CommentStar>
                                    <Rate value={props.el?.rating} disabled></Rate>
                                </S.CommentStar>
                                </S.CommentUserProfile>
                                <S.CommentIcon>
                                <FontAwesomeIcon onClick={onClickToEdit} icon={faPencil}  color="#BDBDBD" />
                                <FontAwesomeIcon id={props.el._id} onClick={props.onClickOpenModal} icon={faX} color="#BDBDBD" />
                                </S.CommentIcon>
                            </S.CommentUserInfo>
                            <S.CommentDesc>
                                <S.Comment>{props.el?.contents}</S.Comment>
                                <S.CommentDate>{getDate(props.el?.createdAt)}</S.CommentDate>
                            </S.CommentDesc>
                        </S.CommentDescBox>                 
                    </S.CommentShowBox>               
                </S.Container>     
            )}
            {/* isCommentEdit={true} */}          
            {isCommentEdit && (
                <CommentWrite isCommentEdit={true} setIsCommentEdit={setIsCommentEdit} el={props.el} />
            )}
        </>
    )
    
}