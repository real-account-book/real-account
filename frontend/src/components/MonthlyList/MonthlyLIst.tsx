import { FC } from "react";
import { alphabet, MonthlyBox1 } from "./MonthlyList.css.js";

const MonthlyList: FC = () => {
  return (
    <button className={MonthlyBox1}>
      <div className={alphabet}>
        <span>1월 (+50000)/(-30000) 내역</span>
      </div>
    </button>
  );
};

export default MonthlyList;
