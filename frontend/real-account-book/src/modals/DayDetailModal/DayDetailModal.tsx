import { Modal, Button } from "antd";
import { modalStyles } from "./DayModalStyle.ts";

type TDayModalProps = {
  dayModalOpen: boolean;
  loading: boolean;
  selectedDate: number | null;
  selectedMonth: number;
  setDayModalOpen: (dayModalOpen: boolean) => void;
}

const DayDetailModal = ({dayModalOpen, loading, selectedDate, selectedMonth, setDayModalOpen}: TDayModalProps) => {
  
  const closeModal = () => {
    setDayModalOpen(false)
  };
  
  return(
    <Modal title={`${selectedMonth + 1}월 ${selectedDate}일`} 
      open={dayModalOpen}
      loading={loading} 
      onCancel={closeModal}
      styles={modalStyles}
      footer={[
        <Button key="back" onClick={closeModal}>
          닫기
        </Button>
      ]}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
}

export default DayDetailModal;