import * as S from './QnaList.styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faX } from "@fortawesome/free-solid-svg-icons";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { getDate } from '../../../../commons/libraries/utils';

export default function MarketQnAListItem(props){

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
                            <S.CommentUserName>{props.el?.user.name}</S.CommentUserName>
                            </S.CommentUserProfile>
                            <S.CommentIcon>
                            <FontAwesomeIcon  icon={faPencil}  color="#BDBDBD" />
                            <FontAwesomeIcon id={props.el._id} onClick={props.onClickDelete} icon={faX} color="#BDBDBD" />
                            </S.CommentIcon>
                        </S.CommentUserInfo>
                        <S.CommentDesc>
                            <S.Comment>{props.el?.contents}</S.Comment>
                            <S.CommentDate>{getDate(props.el?.createdAt)}</S.CommentDate>
                        </S.CommentDesc>
                    </S.CommentDescBox>                 
                </S.CommentShowBox>               
            </S.Container>     
        </S.Wrapper>
)
}