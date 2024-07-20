import type { TabsProps } from "antd";
import { Modal, Tabs } from "antd";
import useAddStateStore from "../../store/addStateStore";
import AddHistoryForm from "./AddHistoryForm/AddHistoryForm";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "지출",
    children: <AddHistoryForm history="plus" />,
  },
  {
    key: "2",
    label: "수입",
    children: <AddHistoryForm history="minus" />,
  },
];

const AddHistoryModal = () => {
  const { addModalState, handleAddModalState } = useAddStateStore();

  return (
    <Modal
      open={addModalState}
      title="내역 추가"
      onCancel={handleAddModalState}
      // footer={[
      //   <Button key="back" onClick={handleAddModalState}>
      //     Return
      //   </Button>,
      //   <Button key="submit" type="primary" onClick={handleAddModalState}>
      //     Submit
      //   </Button>,
      // ]}
      footer={() => null}
    >
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </Modal>
  );
};

export default AddHistoryModal;
