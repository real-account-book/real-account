import { CopyOutlined, DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { card, leftContainer, contents, rightContainer, memoButton, updateButton, deleteButton } from './DetailView.css.ts';
import { TMinusHistory, TPlusHistory } from '../../../types/history.type.ts';
import useAddStateStore from '../../../store/addStateStore.ts';
import { deletePlus } from '../../../apis/plus.ts';
import { deleteMinus } from '../../../apis/minus.ts';
import { Popover, Tooltip } from 'antd';

type TDetailViewProps = {
  data: TMinusHistory | TPlusHistory
}

const DetailView = ({ data }: TDetailViewProps) => {
  const { handleAddModalState } = useAddStateStore();

  const handleDelete = () => {
    if ('plus_id' in data) {
      deletePlus({plus_id: data.plus_id})
    } else if ('minus_id' in data) {
      deleteMinus({minus_id: data.minus_id})
    }
  }

  const content = (
    <div>
      {data.content}
    </div>
  );

  return(
    <div className={card}>
      <div className={leftContainer}>
        <div>
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
        {data.content.length > 0 && (
          <Tooltip placement="top" title="메모">
            <Popover content={content} title="메모" trigger="click">
              <button className={memoButton}>
                <CopyOutlined style={{ fontSize: '16px'}} />
              </button>
            </Popover>
          </Tooltip>
        )}
      </div>

      <div className={rightContainer}>
        <Tooltip placement="top" title="수정">
          <button className={updateButton} onClick={() => handleAddModalState()}><FormOutlined /></button>
        </Tooltip>
        <Tooltip placement="top" title="삭제">
          <button className={deleteButton} onClick={handleDelete}><DeleteOutlined /></button>
        </Tooltip>
      </div>
    </div>
  );
}

export default DetailView;