
import * as S from './QnaAnswerList.styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faPencil, faX } from "@fortawesome/free-solid-svg-icons";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { getDate } from '../../../../commons/libraries/utils';
import { DELETE_USEDITEM_QUESTION_ANSWER, FETCH_USEDITEM_QUESTION_ANSWERS } from './QnaAnswerList.queries';
import { useMutation } from '@apollo/client';
import { IMutation, IMutationDeleteUseditemQuestionAnswerArgs } from '../../../../commons/types/generated/types';
import { Modal } from 'antd';


export default function QnaAnswerListItem(props){

    console.log(props.data)

    const [deleteUseditemQuestionAnswer] = useMutation<Pick<IMutation, "deleteUseditemQuestionAnswer">,IMutationDeleteUseditemQuestionAnswerArgs
      >(DELETE_USEDITEM_QUESTION_ANSWER);


          const onClickDelete = async() => {
      
        try{
            const result = await deleteUseditemQuestionAnswer({
                variables:{
                    useditemQuestionAnswerId: props.el._id,
                },
                refetchQueries: [
                {
                    query: FETCH_USEDITEM_QUESTION_ANSWERS,
                    variables: {
                    useditemQuestionId: String(props.el._id),
                    },
                },
        ],
            })
            Modal.success({
                    content: '삭제가 완료되었습니다!',
                });

                console.log(result)
        } catch (error) {
            if(error instanceof Error)
            Modal.error({
                content: error.message,
            });
        }
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
                                <FontAwesomeIcon onClick={onClickDelete} icon={faX} color="#BDBDBD" />
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