import { CopyOutlined, DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { card, leftContainer, contents, rightContainer, memoButton, updateButton, deleteButton, minusPrice, plusPrice, dateText, dataBox, category } from './DetailView.css.ts';
import { TMinusHistory, TPlusHistory } from '../../../types/history.type.ts';
import useAddStateStore from '../../../store/addStateStore.ts';
import { deletePlus } from '../../../apis/plus.ts';
import { deleteMinus } from '../../../apis/minus.ts';
import { Popover, Tooltip, notification } from 'antd';
import UpdateHistoryModal from '../../../modals/UpdateHistoryModal/UpdateHistoryModal.tsx';
import React, { useState } from 'react';
import { NotificationPlacement } from 'antd/es/notification/interface';
import { Context } from 'express-validator/lib/context';

type TDetailViewProps = {
  data: TMinusHistory | TPlusHistory
}

const DetailView = ({ data }: TDetailViewProps) => {
  const { handleAddModalState } = useAddStateStore();
  const [isUpdateOpen, setIsUpdateOpen] = useState<boolean>(false)

  const handleDelete = () => {
    if ('plus_id' in data) {
      deletePlus({plus_id: data.plus_id})
    } else if ('minus_id' in data) {
      deleteMinus({minus_id: data.minus_id})
    }
  }

  const [api, contextHolder] = notification.useNotification();
  const Context = React.createContext({ name: 'Default' });
  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `수정 완료!`,
      description: <Context.Consumer>{() => `내역 수정이 성공적으로 완료되었습니다!`}</Context.Consumer>,
      placement,
    });
  };

  const content = (
    <div>
      {data.content}
    </div>
  );

  const history = 'plus' in data ? 'plus' : 'minus';

  return(
    <div className={card}>
      <div className={leftContainer}>
        <div className={dataBox}>
          <div className={dateText}>{data.uploaded_at}</div>
          <div className={contents}>
            <div>{data.title}</div>
            {'category' in data && ( 
              <div className={category}>{data.category.category_name}</div> 
            )}
          </div>
          {'minus' in data 
            ? ( <div className={minusPrice}>{data.minus} 원</div> ) 
            : ( <div className={plusPrice}>{data.plus} 원</div> )
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
          <button className={updateButton} onClick={() => setIsUpdateOpen(true)}><FormOutlined /></button>
        </Tooltip>
        <Tooltip placement="top" title="삭제">
          <button className={deleteButton} onClick={handleDelete}><DeleteOutlined /></button>
        </Tooltip>
      </div>
      <UpdateHistoryModal 
        isUpdateOpen={isUpdateOpen} 
        setIsUpdateOpen={setIsUpdateOpen} 
        openNotification={openNotification} 
        history={history} 
        data={data}
      />
    </div>
  );
}

export default DetailView;