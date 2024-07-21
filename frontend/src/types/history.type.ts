import { TCategory } from "./category.type";

export type TPlusHistory = {
  title: string;
  content: string;
  uploaded_at: string;
  plus : number;
}

export type TMinusHistory = {
  title: string;
  content: string;
  uploaded_at: string;
  minus: number;
  category: TCategory
}