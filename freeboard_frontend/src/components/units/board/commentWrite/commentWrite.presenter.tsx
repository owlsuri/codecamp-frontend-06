// 댓글 프레젠터

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import * as S from './commentWrite.styles'


export default function CommentUI(props){

    return (
        <S.Container>                        
        {/* 작성자 입력 부분 */}
            <S.CommentBox>
                <S.CommentTitleBox>
                <FontAwesomeIcon icon={faComment} color="#ffd600" />
                <S.CommentTitle>댓글</S.CommentTitle>
                </S.CommentTitleBox>
                <S.CommentUser>
                <S.CommentWriter onChange={props.onChangeWriter} type="text" placeholder="작성자" />
                <S.CommentPassword onChange={props.onChangePassword} type="password" placeholder="비밀번호" />
                <S.Star onChange={props.onChangeRating}>⭐⭐⭐⭐⭐</S.Star>
                </S.CommentUser>  
        {/* 내용 입력 부분 */}
                <S.CommentInputBox>
                <S.CommentInput onChange={props.onChangeContents} placeholder="개인정보를 공유 및 요청하거나 명예회손, 무단광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에대한 책임은 게시자에게 있습니다."></S.CommentInput>
                <S.CommentInputBottom>
                    <S.CommentCount>0/100</S.CommentCount>
                    <S.CommentInputBtn onClick={props.onClickComment}>등록하기</S.CommentInputBtn>
                </S.CommentInputBottom>          
                </S.CommentInputBox>
            </S.CommentBox>
        </S.Container>
    )
}