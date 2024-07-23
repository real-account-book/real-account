import { PlusOutlined } from "@ant-design/icons";
import { FC, useEffect } from "react";
import AddHistoryModal from "../../modals/AddHistoryMoal/AddHistoryModal";
import useAddStateStore from "../../store/addStateStore";
import {
  addButton,
  blueText,
  buttonIcon,
  buttonText,
  header,
  headerTitle,
  priceContainer,
  redText,
} from "./Header.css";
import useYearTotalStore from "../../store/yearTotalStore";
import { dateFormatter } from "../../utils/dateFormatter";
import { getMinus, getPlus } from "../../apis/total";
import { TMinusHistory, TPlusHistory } from "../../types/history.type";
import PlusButton from "../PlusButton/PlusButton";

const Header: FC = () => {
  const { handleAddModalState } = useAddStateStore();
  const { year, yearlyData, setMinuses, setPluses } = useYearTotalStore();

  const startedAt = dateFormatter(new Date().getFullYear(), 1, 1);
  const endedAt = dateFormatter(new Date().getFullYear(), 12, 31);

  const getPlusTotal = async () => {
    let plusTotal = 0;
    await getPlus(startedAt, endedAt).then((pluses: TPlusHistory[]) => {
      pluses.map((plus) => plusTotal += plus.plus)
    }).then(() => setPluses(plusTotal));
  }
  
  const getMinusTotal = async () => {
    let minusTotal = 0;
    await getMinus(startedAt, endedAt).then((minuses: TMinusHistory[]) => {
      minuses.map((minus) => minusTotal += minus.minus)
    }).then(() => setMinuses(minusTotal));
  }

  useEffect(() => {
    getPlusTotal();
    getMinusTotal();
  }, [])

  return (
    <header className={header}>
      <div className={headerTitle}>{year}년 소비</div>

      <div className={priceContainer}>
        <div className={redText}>-{yearlyData.minuses}</div>
        <div className={blueText}>{yearlyData.pluses}</div>
        <div>합계 {yearlyData.pluses - yearlyData.minuses}</div>
      </div>

      <PlusButton />
    </header>
  );
};

export default Header;
