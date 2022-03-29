import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import DaumPostcode from 'react-daum-postcode';

const ModalAddressPage = () => {
  
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

  const handleComplete = (data) =>{
    console.log(data)
    setIsOpen(false);
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        주소검색
      </Button>
      {/* <Modal title="주소를 검색해주세요" 
        visible={isOpen} // 모달 숨겼다가 나타나게 하는 방법
        onOk={handleOk} 
        onCancel={handleCancel}>
        <DaumPostcode onComplete={handleComplete}/>
      </Modal> */}

      {/* 모달 삭제하고 새로 만드는 방법 */}
       {isOpen && (<Modal title="주소를 검색해주세요" 
              visible={true} onOk={handleOk}  
              onCancel={handleCancel}>
        <DaumPostcode onComplete={handleComplete}/>
      </Modal>
    
  )}
  </>
)};

export default ModalAddressPage