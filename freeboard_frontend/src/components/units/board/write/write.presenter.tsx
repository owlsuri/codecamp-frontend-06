// 게시글 등록하기 & 수정하기 프레젠터

import * as S from './write.styles'
import {IBoardWriteUIProps} from './write.typescript'
import DaumPostcode from 'react-daum-postcode';
import { Modal } from 'antd';

export default function BoardWriteUI(props:IBoardWriteUIProps) {
  return (
    <S.Wrapper>
      <S.Title>게시물 {props.isEdit ? "수정" : "등록"}</S.Title>
      <S.UserBox>
        <S.User>
          <S.ListName>작성자</S.ListName>
          <S.Insert
            onChange={props.onChangeWriter}
            type={"text"}
            placeholder="이름을 적어주세요."
            defaultValue={props.data?.fetchBoard.writer}
            readOnly={!!props.data?.fetchBoard.writer}
          ></S.Insert>
          <S.Error>{props.writerError}</S.Error>
        </S.User>

        <S.User>
          <S.ListName>비밀번호</S.ListName>
          <S.Insert
            onChange={props.onChangePassword}
            type={"password"}
            placeholder="비밀번호를 입력해주세요."
          ></S.Insert>
          <S.Error>{props.passwordError}</S.Error>
        </S.User>
      </S.UserBox>

      <S.TitleBox>
        <S.ListName>제목</S.ListName>
        <S.InsertTitle
          onChange={props.onChangeTitle}
          type={"text"}
          placeholder="제목을 작성해주세요."
          defaultValue={props.data?.fetchBoard.title}
        ></S.InsertTitle>
        <S.Error>{props.titleError}</S.Error>
      </S.TitleBox>

      <S.ContentBox>
        <S.ListName>내용</S.ListName>
        <S.InsertContent
          onChange={props.onChangeContents}
          placeholder="내용을 작성해주세요."
          defaultValue={props.data?.fetchBoard.contents}
        ></S.InsertContent>
        <S.Error>{props.contentsError}</S.Error>
      </S.ContentBox>

      <S.AddressBox>
        <S.PostNum>
          <S.ListName>주소</S.ListName>
          <S.InsertPostNum placeholder="07250" 
                          value={props.zipcode ||
                                  props.data?.fetchBoard.boardAddress?.zipcode || ""} readOnly></S.InsertPostNum>
          <S.PostNumBtn onClick={props.showModal}>우편번호 검색</S.PostNumBtn>
            {/* 주소 모달창 */}
              {props.isOpen && (<Modal title="주소를 검색해주세요" 
                                visible={true} onOk={props.handleOk}  
                                onCancel={props.handleCancel}>
                          <DaumPostcode onComplete={props.handleComplete}/>
                        </Modal>
                           )}

        </S.PostNum>
        <S.InsertAddress type={"text"} value={props.address || props.data?.fetchBoard.boardAddress?.address || ""} readOnly></S.InsertAddress>
        <S.InsertAddress onChange={props.onChangeAddressDetail} defaultValue={props.data?.fetchBoard.boardAddress?.addressDetail || ""} type={"text"} ></S.InsertAddress>
      </S.AddressBox>

      <S.YoutubeBox>
        <S.ListName>유투브</S.ListName>
        <S.YoutubeURL
          onChange={props.onChangeYoutube}
          placeholder="링크를 입력해주세요."
          defaultValue={props.data?.fetchBoard.youtubeUrl || ""}
        ></S.YoutubeURL>
      </S.YoutubeBox>

      <S.AddPhotoBox>
        <S.ListName>사진 첨부</S.ListName>
        <S.UploadBoxes>
          <S.UploadBox>
            <S.UploadPlus>+</S.UploadPlus>
            <S.Upload>Upload</S.Upload>
          </S.UploadBox>
          <S.UploadBox>
            <S.UploadPlus>+</S.UploadPlus>
            <S.Upload>Upload</S.Upload>
          </S.UploadBox>
          <S.UploadBox>
            <S.UploadPlus>+</S.UploadPlus>
            <S.Upload>Upload</S.Upload>
          </S.UploadBox>
        </S.UploadBoxes>
      </S.AddPhotoBox>

      <S.MainBox>
        <S.ListName>메인설정</S.ListName>
        <S.MainRadio1 type={"radio"} name="main" /> 유투브
        <S.MainRadio2 type={"radio"} name="main" /> 사진
      </S.MainBox>
      
      <S.BtnBox>
        <S.SubmitBtn          
          onClick={props.isEdit ? props.onClickEdit : props.onClickSubmit}
          isActive={props.isEdit ? true : props.isActive}>
          {props.isEdit ? "수정" : "등록"}하기
        </S.SubmitBtn>
      </S.BtnBox>
    </S.Wrapper>
  );
}
