import * as S from './QnaList.styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommenting, faPencil, faX } from "@fortawesome/free-solid-svg-icons";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { getDate } from '../../../../commons/libraries/utils';
import { useState } from 'react';
import QnaWrite from '../marketQnaWrite/QnaWrite.container';
import QnaAnswerWrite from '../marketQnaAnswerWrite/QnaAnswerWrite.container';


export default function MarketQnAListItem(props){

    const [isEdit, setIsEdit] = useState(false);
    const [isAnswer, setIsAnswer] = useState(false);

    const onClickQnaEdit = () => {
        setIsEdit(true);
    };

    const onClickAnswer = () => {
        !isAnswer ? setIsAnswer(true) : setIsAnswer(false);
    };

    return(
        <>
        {!isEdit && (
        <S.Wrapper>
            <S.Container  >        
                <S.CommentShowBox >                
                    <S.CommentUserImg>
                        <AccountCircleIcon fontSize="large" color="disabled" />
                    </S.CommentUserImg>
                    <S.CommentDescBox>           
                        <S.CommentUserInfo>
                            <S.CommentUserProfile>
                            <S.CommentUserName>{props.el?.user.name}</S.CommentUserName>
                            </S.CommentUserProfile>
                            <S.CommentIcon>
                                <FontAwesomeIcon  onClick={onClickQnaEdit} icon={faPencil}  color="#BDBDBD" />
                                <FontAwesomeIcon id={props.el._id} onClick={props.onClickDelete} icon={faX} color="#BDBDBD" />
                            </S.CommentIcon>
                        </S.CommentUserInfo>
                        <S.CommentDesc>
                            <S.Comment>{props.el?.contents}</S.Comment>
                            <S.AnswerIcon>
                                <S.CommentDate>{getDate(props.el?.createdAt)}</S.CommentDate>
                                <FontAwesomeIcon onClick={onClickAnswer}  icon={faCommenting}  color="#BDBDBD" />
                            </S.AnswerIcon>
                        </S.CommentDesc>
                    </S.CommentDescBox>                 
                </S.CommentShowBox>               
            </S.Container>     
        </S.Wrapper>
        )}
        {isEdit && (
            <QnaWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
        )}
        {isAnswer && (
            <QnaAnswerWrite />
        )}
        </>
)
}