import { TMinusHistory, TPlusHistory } from "../../types/history.type";
import DetailView from "./DetailView/DetailView";

type TBoardViewProps = {
  histories: (TMinusHistory | TPlusHistory)[]
}

const BoardView = ({ histories }: TBoardViewProps) => {
  
  return (
    <>
    {histories.length ? 
    (<>
        {histories.map((data, idx) => 
          (
            <DetailView key={idx} data={data}/>
          )
        )}
    </>)
    : 
    (<div style={{ padding: '20px'}}>
      <div>해당하는 내역이 없습니다.</div>
    </div>)
    }
    </>
  )
};

export default BoardView;
