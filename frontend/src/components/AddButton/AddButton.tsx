
import AddHistoryModal from '../../modals/AddHistoryMoal/AddHistoryModal';
import { PlusOutlined } from '@ant-design/icons';
import useAddStateStore from '../../store/addStateStore';
import { addButton, buttonIcon, buttonText } from './AddButton.css';

const AddButton = () => {
  const { handleAddModalState } = useAddStateStore();

  return(
    <>
      <button className={addButton} onClick={handleAddModalState}>
        <div className={buttonIcon}>
          <PlusOutlined style={{ width: '70%'}}/>
        </div>
        <div className={buttonText}>내역 추가</div>
      </button>
      <AddHistoryModal />
    </>
  );
}

export default AddButton;