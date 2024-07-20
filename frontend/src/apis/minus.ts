import { BASE_URL } from "./BASE_URL";
const MINUS_URL = `${BASE_URL}/minus`;

type TAddMinusProps = {
  minus: number,
  category: number,
  title: string,
  content: string,
  uploaded_at: string
}

type TDeleteProps = {
  minus_id: number
}

type TMinusContents  = {
  minus: number,
  category: number,
  title: string,
  content: string
}

type TUpdateMinusProps = {
  minus_id: number,
  payload: TMinusContents
}

// 지출 내역 추가
export const addMinus = async (payload: TAddMinusProps) => {
  try {
    const response = await fetch(MINUS_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`)
    }
    return await response.json();
  } catch (err) {
    console.error("Error fetching addMinus:", err);
    throw err;
  }
}

// 지출 내역 삭제
export const deleteMinus = async ({minus_id}: TDeleteProps) => {
  try {
    const response = await fetch(`${MINUS_URL}/${minus_id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json',},
    });
    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`)
    }
    return await response.json();
  } catch (err) {
    console.error("Error fetching deleteMinus:", err);
    throw err;
  }
}

// 지출 내역 수정
export const updateMinus = async ({minus_id, payload}: TUpdateMinusProps) => {
  try {
    const response = await fetch(`${MINUS_URL}/${minus_id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`)
    }
    return await response.json();
  } catch (err) {
    console.error("Error fetching updateMinus:", err);
    throw err;
  }
}