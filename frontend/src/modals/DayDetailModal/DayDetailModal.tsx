import { PlusOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import BoardView from "../../components/BoardView/BoardView.tsx";
import useAddStateStore from "../../store/addStateStore.ts";
import AddHistoryModal from "../AddHistoryMoal/AddHistoryModal.tsx";
import { addHistoryButton, lowerContainer } from "./DayDetailModal.css.ts";
import { useEffect, useState } from "react";
import { getMinus, getPlus } from "../../apis/total.ts";
import { dateFormatter } from "../../utils/dateFormatter.ts";
import { TMinusHistory, TPlusHistory } from "../../types/history.type.ts";

type TDayModalProps = {
  dayModalOpen: boolean;
  loading: boolean;
  selectedDate: number;
  selectedMonth: number;
  setDayModalOpen: (dayModalOpen: boolean) => void;
};

const DayDetailModal = ({
  dayModalOpen,
  loading,
  selectedDate,
  selectedMonth,
  setDayModalOpen,
}: TDayModalProps) => {
  const month: number = selectedMonth + 1;
  const { handleAddModalState } = useAddStateStore();

  const closeModal = () => {
    setDayModalOpen(false);
  };

  const modalStyles = {
    header: {
      fontSize: "100px",
      borderLeft: `5px solid rgba(105, 118, 235, 1)`,
      borderRadius: 0,
      paddingInlineStart: 15,
    },
  };

  return (
    <Modal
      title={`${month}월 ${selectedDate}일`}
      open={dayModalOpen}
      loading={loading}
      onCancel={closeModal}
      styles={modalStyles}
      footer={[
        <Button key="back" onClick={closeModal}>
          닫기
        </Button>,
      ]}
    >
      {/* <BoardView /> */}

      <div className={lowerContainer}>
        <button className={addHistoryButton} onClick={handleAddModalState}>
          <div>
            <PlusOutlined />
          </div>
          <p>기록 추가</p>
        </button>
        <AddHistoryModal />

        <div>
          <div>+ 13,504 원</div>
          <div>
            24년 {month}월 {selectedDate}일 합계
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DayDetailModal;
