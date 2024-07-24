import { DeleteOutlined, DownCircleOutlined, DownSquareOutlined, PlusCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Input, Modal, Button } from "antd";
import { useState } from "react";
import { addCategory, deleteCategory } from "../../apis/category";
import { deleteButton } from "../../components/BoardView/DetailView/DetailView.css";
import { TCategory } from "../../types/category.type";
import { addButton, buttonIcon, buttonText } from "../UpdateHistoryModal/UpdateHistoryModal.css";
import { addCategoryButton, addCategoryText, categoriesContainer, categoryBox } from "./CategoryModal.css";

type TCategoryAddModal = {
  open: boolean;
  categories: TCategory[];
  setOpen: (open: boolean) => void;
  setCategories: (categories: TCategory[]) => void;
};

const CategoryModal = ({
  setOpen,
  open,
  categories,
  setCategories,
}: TCategoryAddModal) => {
  const [handleInput, setHandleInput] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>("");

  const AddCategories = async () => {
    const payload = {
      category_name: categoryName,
    };
    await addCategory(payload).then((res) => {
      const category_id = res.identifiers[0].category_id;
      const newCategory = {
        category_id,
        category_name: categoryName,
      };
      setCategories([...categories, newCategory]);
    });
    setHandleInput(!handleInput);
  };

  const DeleteCategory = async (category: TCategory, idx: number) => {
    deleteCategory(category.category_id)
      .then((_) => {
        const categoriesCopy = categories;
        categoriesCopy.splice(idx, 1);
        setCategories([...categoriesCopy]);
      })
      .catch(() => {
        window.alert(
          "해당 카테고리와 관련된 내역이 존재하여 카테고리 삭제가 불가합니다."
        );
      });
  };

  return (
    <Modal
      title="카테고리 관리"
      centered
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      width={350}
      footer={[
        <Button key="back" onClick={() => setOpen(!open)}>
          닫기
        </Button>
      ]}
    > 
      <div className={categoriesContainer}>
      {categories.map((category, idx) => (
        <div key={idx} className={categoryBox}>
          <div>{category.category_name}</div>
          {/* <button className={buttons} onClick={() => {}}><FormOutlined /></button> */}
          <button
            className={deleteButton}
            style={{ marginBottom: '5px'}}
            onClick={() => DeleteCategory(category, idx)}
          >
            <DeleteOutlined />
          </button>
        </div>
      ))}
      </div>

      <div style={{ marginTop: '15px'}}>
        <button className={addButton} onClick={() => setHandleInput(!handleInput)}>
          {!handleInput ? (<RightCircleOutlined className={buttonIcon}/>) : (<DownCircleOutlined className={buttonIcon}/>)}
          <div className={buttonText}>{!handleInput ? '카테고리 추가' : '카테고리 추가 닫기'}</div>
        </button>
      </div>
      {handleInput && (
        <>
          <Input onChange={(e) => setCategoryName(e.target.value)} placeholder="추가하려는 카테고리 이름을 입력하세요"/>
          <button className={addCategoryButton} onClick={AddCategories}>
            <PlusCircleOutlined className={buttonIcon}/>
            <div className={addCategoryText}>카테고리 추가하기</div>
          </button>
        </>
      )}
    </Modal>
  );
};

export default CategoryModal;
