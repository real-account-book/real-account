import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import { TCategory } from '../../types/category.type';
import { Input } from "antd";
import { addCategory, deleteCategory } from '../../apis/category';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { buttons } from '../../components/BoardView/DetailView/DetailView.css';

type TCategoryAddModal = {
  open: boolean;
  categories: TCategory[];
  setOpen: (open: boolean) => void;
  setCategories: (categories: TCategory[]) => void;
}

const CategoryModal = ({setOpen, open, categories, setCategories}: TCategoryAddModal) => {
  const [handleInput, setHandleInput] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>('');

  const AddCategories = async () => {
    const payload = {
      category_name: categoryName
    }
    await addCategory(payload).then((res) => {
      const category_id = res.identifiers[0].category_id;
      const newCategory = {
        category_id,
        category_name: categoryName
      }
      setCategories([...categories, newCategory])
    })
    setHandleInput(!handleInput)
  };

  const DeleteCategory = async (category: TCategory, idx: number) => {
    deleteCategory(category.category_id).then((res) => {
      console.log(res);
      const categoriesCopy = categories
      categoriesCopy.splice(idx, 1)
      console.log('copy', categoriesCopy, idx)
      setCategories([...categoriesCopy])
    }).catch((() => {
      window.alert('해당 카테고리와 관련된 내역이 존재하여 카테고리 삭제가 불가합니다.')
    }))
  }

  return(
    <Modal
      title="카테고리 관리"
      centered
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      width={350}
    >
      {categories.map((category, idx) => (
        <div key={idx}>
          <div>{category.category_name}</div>
          <button className={buttons} onClick={() => {}}><FormOutlined /></button>
          <button className={buttons} onClick={() => DeleteCategory(category, idx)}><DeleteOutlined /></button>
        </div>
      ))}
      <button onClick={() => setHandleInput(!handleInput)}>카테고리 추가</button>
      {handleInput && (
        <>  
          <Input onChange={(e) => setCategoryName(e.target.value)} />
          <button onClick={AddCategories}>카테고리 등록</button>
        </>
      )}

    </Modal>
  );
}

export default CategoryModal;