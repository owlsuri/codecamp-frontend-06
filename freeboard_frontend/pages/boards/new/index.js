import {Wrapper, Title, UserBox, User, ListName, Insert, TitleBox, 
    InsertTitle, InsertContent, ContentBox, PostNum, PostNumBtn,AddressBox, 
    InsertPostNum, InsertAddress,YoutubeBox, AddPhotoBox, 
    Upload, UploadBox, UploadPlus, UploadBoxes, 
    MainBox, MainRadio1,MainRadio2, SubmitBtn, BtnBox, Error} from '../../../styles/boardnew'
import { useState } from 'react'
import { useMutation, gql } from "@apollo/client";

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        # 가져올 것이 여러개일때 바로 아래줄부터 필요(2중구조인 이유)
        createBoard(createBoardInput: $createBoardInput) {  
        _id
        writer
        title
        contents
        }
    }
`;

export default function BoardsNewPage(){
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [data, setData] = useState("");
    // const [youtubeUrl, setYoutubeUrl] = useState("");
    // const [zipcode, setZipcode] = useState("");
    // const [address, setAddress] = useState("");
    // const [addressDetail, setAddressDetail] = useState("");
    // const [image, setImage] = useState("");

    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [contentsError, setContentsError] = useState("");
    const [createBoard] = useMutation(CREATE_BOARD);


    const onChangeWriter = (event) => {
        setWriter(event.target.value);

    if (event.target.value !== "") {
        setWriterError("");
    }
    };
  
    const onChangePassword = (event) => {
        setPassword(event.target.value);

    if (event.target.value !== "") {
        setPasswordError("");
    }
    };

    const onChangeTitle = (event) => {
    setTitle(event.target.value);

    if (event.target.value !== "") {
        setTitleError("");
    }
    };
  
    const onChangeContents = (event) => {
        setContents(event.target.value);

    if (event.target.value !== "") {
        setContentsError("");
    }
    };

    const onClickSubmit = async () => {
        let result = await createBoard({
            variables: {
                createBoardInput: {
                writer,
                password,
                title,
                contents
                //키와 밸류가 같으면 밸류 생략가능 
                },
            },
        });
        console.log(result);
        console.log(result.data.createBoard.message);
        setData(result.data.createBoard.message);

        if (writer === "") {
            setWriterError("작성자를 입력해주세요.");
        }
        if (password === "") {
            setPasswordError("비밀번호를 입력해주세요.");
        }
        if (title === "") {
            setTitleError("제목을 입력해주세요.");
        }
        if (contents === "") {
            setContentsError("내용을 입력해주세요.");
        }
        if (
            writer !== "" && password !== "" && title !== "" && contents !== "") {
            alert("게시물 등록 완료!");
        }
    };



    // const onChangeYoutube = (event) => {
    //     setYoutubeUrl(event.target.value);
    // }
    // const onChangeZipcode = (event) => {
    //     setZipcode(event.target.value);
    // };
    // const onChangeAddress = (event) => {
    //     setAddress(event.target.value);
    // };
    // const onChangeAddressDetail = (event) => {
    //   setAddressDetail(event.target.value);
    // };
    // const onChangeImage = (event) => {
    //   setImage([event.target.value]);
    // };

    return (
    <Wrapper>
        <Title>게시물 등록</Title>
        <UserBox>
            <User>
            <ListName>작성자</ListName>
            <Insert onChange={onChangeWriter} type={"text"} placeholder="이름을 적어주세요."></Insert>
            <Error>{writerError}</Error>
            </User>

            <User>
            <ListName>비밀번호</ListName>
            <Insert onChange={onChangePassword} type={"password"} placeholder="비밀번호를 입력해주세요."
            ></Insert>
            <Error>{passwordError}</Error>
            </User>
        </UserBox>
        <TitleBox>
            <ListName>제목</ListName>
            <InsertTitle onChange={onChangeTitle} type={"text"} placeholder="제목을 작성해주세요."></InsertTitle>
            <Error>{titleError}</Error>
        </TitleBox>

        <ContentBox>
            <ListName>내용</ListName>
            <InsertContent
            onChange={onChangeContents}
            type={"textarea"}
            placeholder="내용을 작성해주세요."></InsertContent>
            <Error>{contentsError}</Error>
        </ContentBox>

        <AddressBox>
            <PostNum>
            <ListName>주소</ListName>
            <InsertPostNum  placeholder="07250"></InsertPostNum>
            <PostNumBtn>우편번호 검색</PostNumBtn>
            </PostNum>
            <InsertAddress type={"text"}></InsertAddress>
            <InsertAddress  type={"text"}></InsertAddress>
        </AddressBox>
        <YoutubeBox>
            <ListName>유투브</ListName>
            <InsertTitle  type={"text"} placeholder="링크를 복사해주세요."></InsertTitle>
        </YoutubeBox>
        <AddPhotoBox>
            <ListName>사진 첨부</ListName>
            <UploadBoxes>
            <UploadBox>
                <UploadPlus>+</UploadPlus>
                <Upload>Upload</Upload>
            </UploadBox>
            <UploadBox>
                <UploadPlus>+</UploadPlus>
                <Upload>Upload</Upload>
            </UploadBox>
            <UploadBox>
                <UploadPlus>+</UploadPlus>
                <Upload>Upload</Upload>
            </UploadBox>
            </UploadBoxes>
        </AddPhotoBox>
        <MainBox>
            <ListName>메인설정</ListName>
            <MainRadio1 type={"radio"} name="main" />유투브
            <MainRadio2 type={"radio"} name="main" />사진
        </MainBox>
        <BtnBox>
            <SubmitBtn onClick={onClickSubmit}>등록하기</SubmitBtn>
        </BtnBox>
    </Wrapper>
    );
}
