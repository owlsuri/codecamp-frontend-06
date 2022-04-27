
import * as S from './QnaAnswerList.styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommenting, faPencil, faX } from "@fortawesome/free-solid-svg-icons";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { getDate } from '../../../../commons/libraries/utils';

export default function QnaAnswerListUI(props){

    console.log(props.data)
    return(
         <S.Wrapper>
            <S.Container  >        
                <S.CommentShowBox >                
                    <S.CommentUserImg>
                        <AccountCircleIcon fontSize="large" color="disabled" />
                    </S.CommentUserImg>
                    <S.CommentDescBox>           
                        <S.CommentUserInfo>
                            <S.CommentUserProfile>
                            <S.CommentUserName></S.CommentUserName>
                            </S.CommentUserProfile>
                            <S.CommentIcon>
                                <FontAwesomeIcon  icon={faPencil}  color="#BDBDBD" />
                                <FontAwesomeIcon id={props.el._id} icon={faX} color="#BDBDBD" />
                            </S.CommentIcon>
                        </S.CommentUserInfo>
                        <S.CommentDesc>
                            <S.Comment>{props.el?.contents}</S.Comment>
                            <S.AnswerIcon>
                                <S.CommentDate>{getDate(props.el?.createdAt)}</S.CommentDate>
                                <FontAwesomeIcon icon={faCommenting}  color="#BDBDBD" />
                            </S.AnswerIcon>
                        </S.CommentDesc>
                    </S.CommentDescBox>                 
                </S.CommentShowBox>               
            </S.Container>     
        </S.Wrapper>
    )
}