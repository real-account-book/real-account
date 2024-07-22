import { FC } from "react";
import { alphabet, button, purpleBox } from "./YearNavigator.css.ts";

const YearNavigator: FC = () => {
  return (
    <div className={purpleBox}>
      <button className={button}>&lt;</button>
      <div className={alphabet}>
        <span>2024</span>
      </div>
      <button className={button}>&gt;</button>
    </div>
  );
};

export default YearNavigator;
