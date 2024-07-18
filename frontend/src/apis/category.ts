import axios from 'axios';
import { BASE_URL } from "./BASE_URL";
const CATEGORY_URL = `${BASE_URL}/category`;

// 카테고리 전체 조회
export type TGetAllCategories = () => Promise<any>;
// 카테고리 개별 조회
export type TGetCategory = (categodyId: number) => Promise<any>;
// 카테고리 항목 추가
export type TAddCategory = (category_name: string) => Promise<any>;


// 카테고리 전체 조회
export const getAllCategories: TGetAllCategories = () => {
  return fetch(CATEGORY_URL, {
    method: 'GET',
    headers: {'Content-Type': 'application/json',},
  }).then((res) => res.json())
  .catch((err) => { throw err })
};

// 카테고리 개별 조회
export const getCategory: TGetCategory = (categodyId) => {
  return fetch(`${CATEGORY_URL}/${categodyId}`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json',},
  }).then((res) => res.json())
  .catch((err) => { throw err })
};

// 카테고리 항목 추가
export const addMinus: TAddCategory = (category_name) => {
  const data = { category_name }
  return fetch(CATEGORY_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify(data),
  }).then((res) => console.log(res.json()))
  .catch((err) => console.log(err))
}