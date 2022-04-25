import * as S from './QnaWrite.styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

export default function QnaWriteUI(props){

    return(
    <S.Container>                        
        {/* 작성자 입력 부분 */}
            <S.CommentBox>
                <S.CommentTitleBox>
                <FontAwesomeIcon icon={faQuestionCircle} color="#6888B2" />
                <S.CommentTitle>문의하기</S.CommentTitle>
                </S.CommentTitleBox> 
        {/* 내용 입력 부분 */}
                <S.CommentInputBox>
                <S.CommentInput maxlength={100} onChange={props.onChangeContents}  placeholder="개인정보를 공유 및 요청하거나 명예회손, 무단광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에대한 책임은 게시자에게 있습니다."/>
                <S.CommentInputBottom>
                    <S.CommentCount>{props.el?.contents.length}/100</S.CommentCount>
                    <S.CommentInputBtn onClick={props.onClickAsk}>문의하기</S.CommentInputBtn>
                </S.CommentInputBottom>          
                </S.CommentInputBox>
            </S.CommentBox>
        </S.Container>

    )
}