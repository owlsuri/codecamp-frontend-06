import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import DaumPostcode from 'react-daum-postcode';

const ModalAddressPage = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) =>!prev);
  };


  const handleComplete = (data:any) =>{
    console.log(data)
    onToggleModal()
  }

  return (
    <>
      <Button onClick={showModal}>주소검색</Button>
       {isOpen && (
       <Modal 
              visible={true} onOk={onToggleModal}  
              onCancel={onToggleModal}>
        <DaumPostcode onComplete={handleComplete}/>
      </Modal>
  )}
  </>
)};

export default ModalAddressPage