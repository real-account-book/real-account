import { useEffect, useState } from "react";
import { TMinusHistory, TPlusHistory } from "../../types/history.type";
import DetailView from "./DetailView/DetailView";

type TBoardViewProps = {
  histories: (TMinusHistory | TPlusHistory)[]
}

const BoardView = ({ histories }: TBoardViewProps) => {

  return (
    <>
      {histories.map((data, idx) => 
        (
          <DetailView key={idx} data={data}/>
        )
      )}
    </>
  )
};

export default BoardView;
