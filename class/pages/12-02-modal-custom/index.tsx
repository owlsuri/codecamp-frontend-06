import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const ModalCustomPage = () => {
  const [password, setPassword] = useState("");  
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };
  const onChangePassword = (event) =>{
    setPassword(event?.target.value)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        비밀번호 입력
      </Button>
      <Modal title="비밀번호를 입력해주세요" visible={isOpen} onOk={handleOk} onCancel={handleCancel}>
        <p><input type="password" onChange={onChangePassword} /></p>
      </Modal>
    </>
  );
};

export default ModalCustomPage