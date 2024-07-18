import { BASE_URL } from "./BASE_URL";
const PLUS_URL = `${BASE_URL}/plus`;

type TAddPlusProps = {
  id: number,
  plus: number,
  title: string,
  content: string,
  uploaded_at: string
}

type TDeletePlusProps = {
  plus_id: number
}

type TPlusContents  = {
  plus: number,
  title: string,
  content: string,
}

type TUpdatePlusProps = {
  plus_id: string,
  payload: TPlusContents
}

// 입금 내역 추가
export const addPlus = async (payload: TAddPlusProps) => {
  try {
    const response = await fetch(PLUS_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`)
    }
    return await response.json();
  } catch (err) {
    console.error("Error fetching addPlus:", err);
    throw err;
  }
}

// 입금 내역 삭제
export const deletePlus = async ({plus_id}: TDeletePlusProps) => {
  try {
    const response = await fetch(`${PLUS_URL}/${plus_id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json',},
    });
    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`)
    }
    return await response.json();
  } catch (err) {
    console.error("Error fetching deletePlus:", err);
    throw err;
  }
}

// 입금 내역 수정
export const updatePlus = async ({plus_id, payload}: TUpdatePlusProps) => {
  try {
    const response = await fetch(`${PLUS_URL}/${plus_id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`)
    }
    return await response.json();
  } catch (err) {
    console.error("Error fetching updatePlus:", err);
    throw err;
  }
}