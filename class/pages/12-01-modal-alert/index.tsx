import { Modal } from 'antd';

export default function ModalAlertPage(){

    const onClickSuccessBtn = () => {
        Modal.success({
            content: '게시물 등록에 성공했습니다!',
        });
    }
    const onClickFailBtn = () => {
        Modal.error({
            content: '비밀번호가 틀립니다.',
        });
    }



    return(
        <div>
            <button onClick={onClickSuccessBtn}>성공했을때</button>
            <button onClick={onClickFailBtn}>실패했을때</button>
        </div>
    )
}