import { PlusOutlined } from "@ant-design/icons";
import { FC } from "react";
import { addButton, header, priceContainer } from "./Header.css";
import useAddStateStore from "../../store/addStateStore";
import AddHistoryModal from "../../modals/AddHistoryMoal/AddHistoryModal";

const Header: FC = () => {
  const { handleAddModalState } = useAddStateStore();

  return (
    <header className={header}>
      <div>2024년 소비</div>

      <div className={priceContainer}>
        <div>-10,800,000</div>
        <div>+ 20,000,000</div>
        <div>합계 + 9,200,000</div>
      </div>

      <button className={addButton} onClick={handleAddModalState}>
        <div>
          <PlusOutlined />
        </div>
        <div>내역 추가</div>
      </button>
      <AddHistoryModal />
      
    </header>
  );
};

export default Header;
