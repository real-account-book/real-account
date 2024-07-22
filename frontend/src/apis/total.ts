import { BASE_URL } from "./BASE_URL";
const TOTAL_URL = `${BASE_URL}/total`;

// 일정기간 전체 입금 내역 조회
export const getPlus = async (startAt: string, endAt: string) => {
  try {
    const response = await fetch(`${TOTAL_URL}/plus/${startAt}/${endAt}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json',},
    });
    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`)
    }
    return await response.json();
  } catch (err) {
    console.error("Error fetching getPlus:", err);
    throw err;
  }
};  

// 일정기간 전체 출금 내역 조회
export const getMinus = async (startAt: string, endAt: string) => {
  try {
    const response = await fetch(`${TOTAL_URL}/minus/${startAt}/${endAt}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json',},
    });
    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`)
    }
    return await response.json();
  } catch (err) {
    console.error("Error fetching getPlus:", err);
    throw err;
  }
}; 

// 카테고리별 출금 내역 조회 (기간 범위 조회) 
export const getCategoryTotal = async (startAt: string, endAt: string, categoryId: number) => {
  try {
    const response = await fetch(`${TOTAL_URL}/minus/${startAt}/${endAt}/${categoryId}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json',},
    });
    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`)
    }
    return await response.json();
  } catch (err) {
    console.error("Error fetching getPlus:", err);
    throw err;
  }
}; 