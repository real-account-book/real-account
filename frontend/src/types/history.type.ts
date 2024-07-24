import { TCategory } from "./category.type";

export type TPlusHistory = {
  plus_id: number;
  title: string;
  content: string;
  uploaded_at: string;
  plus : number;
}

export type TMinusHistory = {
  minus_id: number;
  title: string;
  content: string;
  uploaded_at: string;
  minus: number;
  category: TCategory
}