import { FC } from "react";
import { alphabet, MonthlyBox4 } from "./MonthlyList.css.ts";

const MonthlyList: FC = () => {
  return (
    <button className={MonthlyBox4}>
      <div className={alphabet}>
        <span>4월 (+30000)/(-17000) 내역</span>
      </div>
    </button>
  );
};

export default MonthlyList;
