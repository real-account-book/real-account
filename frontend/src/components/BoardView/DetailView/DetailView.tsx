import { CopyOutlined, DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { card, leftContainer, contents, rightContainer, buttons } from './DetailView.css.ts';
import { TMinusHistory, TPlusHistory } from '../../../types/history.type.ts';
import useAddStateStore from '../../../store/addStateStore.ts';

type TDetailViewProps = {
  data: TMinusHistory | TPlusHistory
}

const DetailView = ({ data }: TDetailViewProps) => {
  const { handleAddModalState } = useAddStateStore();

  return(
    <div className={card}>
      <div className={leftContainer}>
        <div>{data.uploaded_at}</div>
        <div className={contents}>
          <div>{data.title}</div>
          {'category' in data && ( <div>{data.category.category_name}</div> )}
        </div>
        {'minus' in data 
          ? ( <div>{data.minus}</div> ) 
          : ( <div>{data.plus}</div> )
        }
      </div>

      <div className={rightContainer}>
        <button className={buttons}><CopyOutlined /></button>
        <button className={buttons} onClick={() => handleAddModalState()}><FormOutlined /></button>
        <button className={buttons}><DeleteOutlined /></button>
      </div>
    </div>
  );
}

export default DetailView;