import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import useAddStateStore from '../../store/addStateStore';

const AddHistoryModal = () => {
  const { addModalState, handleAddModalState } = useAddStateStore();

  return(
    <Modal
      open={addModalState}
      title="내역 추가"
      onCancel={handleAddModalState}
      footer={[
        <Button key="back" onClick={handleAddModalState}>
          Return
        </Button>,
        <Button key="submit" type="primary" onClick={handleAddModalState}>
          Submit
        </Button>,
      ]}
    >
    </Modal>
  );
}

export default AddHistoryModal;