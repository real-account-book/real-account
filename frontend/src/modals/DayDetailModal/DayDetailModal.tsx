import { PlusOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import BoardView from "../../components/BoardView/BoardView.tsx";
import useAddStateStore from "../../store/addStateStore.ts";
import AddHistoryModal from "../AddHistoryMoal/AddHistoryModal.tsx";
import { addHistoryButton, lowerContainer } from "./DayDetailModal.css.ts";
import { TMinusHistory, TPlusHistory } from "../../types/history.type.ts";
import { useEffect, useState } from "react";
import useDayHistoriesStore from "../../store/dayHistoriesStore.ts";
import PlusButton from "../../components/PlusButton/PlusButton.tsx";

type TDayModalProps = {
  dayModalOpen: boolean;
  loading: boolean;
  selectedDate: number;
  selectedMonth: number;
  setDayModalOpen: (dayModalOpen: boolean) => void;
  histories: (TPlusHistory | TMinusHistory)[]
};

const DayDetailModal = ({
  dayModalOpen,
  loading,
  selectedDate,
  selectedMonth,
  setDayModalOpen,
  histories
}: TDayModalProps) => {
  const month: number = selectedMonth + 1;
  const { handleAddModalState } = useAddStateStore();
  const [dayTotal, setDayTotal] = useState<number>(0);

  useEffect(() => {
    let total: number = 0;
    histories.map((history) => {
     if ('minus' in history) {
      total -= history.minus
     } else { total += history.plus }
    })
    setTimeout(() => {
      setDayTotal(total)
    }, 100)
  }, [histories])

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
      <BoardView histories={histories}/>

      <div className={lowerContainer}>
        <PlusButton />

        <div>
          <div>{dayTotal} 원</div>
          <div>
            24년 {month}월 {selectedDate}일 합계
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DayDetailModal;
