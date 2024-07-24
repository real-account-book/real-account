import { PlusOutlined } from "@ant-design/icons";
import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddHistoryModal from "../../modals/AddHistoryMoal/AddHistoryModal";
import useAddStateStore from "../../store/addStateStore";
import {
  addButton,
  blueText,
  header,
  headerTitle,
  priceContainer,
  redText,
} from "./Header.css";
import useYearTotalStore from "../../store/yearTotalStore";
import { dateFormatter } from "../../utils/dateFormatter";
import { getMinus, getPlus } from "../../apis/total";
import { TMinusHistory, TPlusHistory } from "../../types/history.type";
import AddButton from "../AddButton/AddButton";

const Header: FC = () => {
  const { handleAddModalState } = useAddStateStore();
  const { yearmonth } = useParams<{ yearmonth: string }>();
  const { year, setYear, yearlyData, setMinuses, setPluses } = useYearTotalStore();

  useEffect(() => {
    if (yearmonth) {
      const urlYear = parseInt(yearmonth.substring(0, 4), 10);
      setYear(urlYear);
    }
  }, [yearmonth, setYear]);

  const startedAt = dateFormatter(year, 1, 1);
  const endedAt = dateFormatter(year, 12, 31);

  const getPlusTotal = async () => {
    let plusTotal = 0;
    await getPlus(startedAt, endedAt).then((pluses: TPlusHistory[]) => {
      pluses.forEach((plus) => (plusTotal += plus.plus));
    }).then(() => setPluses(plusTotal));
  };

  const getMinusTotal = async () => {
    let minusTotal = 0;
    await getMinus(startedAt, endedAt).then((minuses: TMinusHistory[]) => {
      minuses.forEach((minus) => (minusTotal += minus.minus));
    }).then(() => setMinuses(minusTotal));
  };

  useEffect(() => {
    getPlusTotal();
    getMinusTotal();
  }, [year]);

  return (
    <header className={header}>
      <div className={headerTitle}>{year}년 소비</div>
      <div className={priceContainer}>
        <div className={redText}>-{yearlyData.minuses}</div>
        <div className={blueText}>{yearlyData.pluses}</div>
        <div>합계 {yearlyData.pluses - yearlyData.minuses}</div>
      </div>
      <AddButton />
    </header>
  );
};

export default Header;