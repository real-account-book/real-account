import { FC } from "react";
import { alphabet, button, purpleBoxSecond } from "./MonthNavigator.css.ts";

const MonthNavigator: FC = () => {
  return (
    <div className={purpleBoxSecond}>
      <button className={button}>&lt;</button>
      <div className={alphabet}>
        <span>5월</span>
      </div>
      <button className={button}>&gt;</button>
    </div>
  );
};

export default MonthNavigator;
