
import * as S from './QnaAnswerList.styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faPencil, faX } from "@fortawesome/free-solid-svg-icons";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { getDate } from '../../../../commons/libraries/utils';


export default function QnaAnswerListItem(props){

    const onClickUpdate = () => {

    }

    const onClickDelete = () => {
        
    }

    return(
        <S.Wrapper>
                <S.Arrow>
                <FontAwesomeIcon size='2x' icon={faArrowRight} color="#6888B2" />        
                </S.Arrow>
                <div>
            <S.Container>
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
                                <FontAwesomeIcon onClick={props.onClickUpdate} icon={faPencil}  color="#BDBDBD" />
                                <FontAwesomeIcon onClick={props.onClickDelete} icon={faX} color="#BDBDBD" />
                            </S.CommentIcon>
                        </S.CommentUserInfo>
                        <S.CommentDesc>
                            <S.Comment>{props.el?.contents}</S.Comment>
                            <S.AnswerIcon>
                                <S.CommentDate>{getDate(props.el?.createdAt)}</S.CommentDate>
                            </S.AnswerIcon>
                        </S.CommentDesc>
                    </S.CommentDescBox>                 
                </S.CommentShowBox>
            </S.Container>  
                </div>               
        </S.Wrapper>
    )
}