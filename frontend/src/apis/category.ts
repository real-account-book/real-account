import axios from 'axios';
import { BASE_URL } from "./BASE_URL";
const CATEGORY_URL = `${BASE_URL}/category`;

{/* types*/}
type TGetCategoryProps = {
  category_id: number
}

type TAddCategoryProps = {
  category_name: string
}

// 카테고리 전체 조회
export type TGetAllCategories = () => Promise<any>;
// 카테고리 개별 조회
export type TGetCategory = (payload: TGetCategoryProps) => Promise<any>;
// 카테고리 항목 추가
export type TAddCategory = (payload: TAddCategoryProps) => Promise<any>;


{/* logics */}
// 카테고리 전체 조회
export const getAllCategories: TGetAllCategories = async () => {
  try {
    const response = await fetch(CATEGORY_URL, {
      method: 'GET',
      headers: {'Content-Type': 'application/json',},
    });
    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`)
    }
    return await response.json();
  } catch (err) {
    console.error("Error fetching getAllCategories:", err);
    throw err;
  }
};

// 카테고리 개별 조회
export const getCategory: TGetCategory = async (payload) => {
  try {
    const response = await fetch(`${CATEGORY_URL}/${payload.category_id}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json',},
    })
    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`)
    }
    return await response.json();
  } catch (err) {
    console.error("Error fetching getCategory:", err);
    throw err;
  }
};

// 카테고리 항목 추가
export const addCategory: TAddCategory =  async (payload) => {
  try {
    const response = await fetch(CATEGORY_URL, {
      method: 'GET',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(payload)
    })
    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`)
    }
    return await response.json();
  } catch (err) {
    console.error("Error fetching addCategory:", err);
    throw err;
  }
}