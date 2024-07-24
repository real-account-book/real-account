import { BASE_URL } from "./BASE_URL";
const CATEGORY_URL = `${BASE_URL}/category`;

type TGetCategoryProps = {
  category_id: number
}

type TAddCategoryProps = {
  category_name: string
}

// 카테고리 전체 조회
export const getAllCategories = async () => {
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
export const getCategory = async ({category_id}: TGetCategoryProps) => {
  try {
    const response = await fetch(`${CATEGORY_URL}/${category_id}`, {
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
export const addCategory =  async (payload: TAddCategoryProps) => {
  try {
    const response = await fetch(CATEGORY_URL, {
      method: 'POST',
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

// 카테고리 항목 삭제
export const deleteCategory =  async (categoryId: number) => {
  try {
    const response = await fetch(`${CATEGORY_URL}/${categoryId}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json',},
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

