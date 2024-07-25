import type { TabsProps, NotificationArgsProps } from "antd";
import { Modal, Tabs, notification } from "antd";
import useAddStateStore from "../../store/addStateStore";
import AddHistoryForm from "./AddHistoryForm/AddHistoryForm";
import React, { useMemo } from 'react';

type NotificationPlacement = NotificationArgsProps['placement'];

const onChange = (key: string) => {
  // console.log(key);
};

const AddHistoryModal = () => {
  const { addModalState, handleAddModalState } = useAddStateStore();

  const [api, contextHolder] = notification.useNotification();
  const Context = React.createContext({ name: 'Default' });

  const contextValue = useMemo(() => ({ name: 'Ant Design' }), []);

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `등록 완료!`,
      description: <Context.Consumer>{() => `새로운 내역이 성공적으로 등록되었습니다!`}</Context.Consumer>,
      placement,
    });
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "지출",
      children: <AddHistoryForm history="minus" openNotification={openNotification} />,
    },
    {
      key: "2",
      label: "수입",
      children: <AddHistoryForm history="plus" openNotification={openNotification}/>,
    },
  ];

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <Modal
        open={addModalState}
        title="내역 추가"
        onCancel={handleAddModalState}
        footer={() => null}
      >
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </Modal>
    </Context.Provider>
  );
};

export default AddHistoryModal;
