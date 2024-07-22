import { useEffect, useState } from "react";
import { Pie, PieChart } from "recharts";
import { TMinusHistory } from "../../types/history.type";
import { getAllCategories } from "../../apis/category";
import { dateFormatter } from "../../utils/dateFormatter";
import { getCategoryTotal } from "../../apis/total";
import { TCategory } from "../../types/category.type";
import MonthCalendarSmall from "../MonthCalendarSmall/MonthCalendarSmall";

type TCategoryPieChartProps = {
  year: string;
  month: string;
}

type TCategoriesTotal = {
  name: string;
  total: number;
}

const CategoryPieChart = ({year, month}: TCategoryPieChartProps) => {
  const [categoriesTotal, setCategoriesTotal] = useState<TCategoriesTotal[]>([]);

  useEffect(() => {
    const startedAt = dateFormatter(parseInt(year), parseInt(month), 1);
    const endedAt = dateFormatter(parseInt(year), parseInt(month), 31);
    let totalArr: TCategoriesTotal[] = [];
    getAllCategories().then((allCategories) => {
      allCategories.map((category: TCategory) => {
        let total: number = 0;
        getCategoryTotal(startedAt, endedAt, category.category_id)
        .then((histories) => {
          histories.map((history: TMinusHistory) => {
            total += history.minus
          })
          const categoryTotal = {
            name: category.category_name,
            total: total
          }
          totalArr.push(categoryTotal)
        }).then(() => {
          totalArr.sort((a, b) => b.total - a.total)
          setCategoriesTotal([...totalArr])
        })
      })
    })
  }, [])

  return (
    <>
      <PieChart width={280} height={250}>
        <Pie
          data={categoriesTotal}
          dataKey="total"
          nameKey="name"
          cx="55%"
          cy="50%"
          outerRadius={70}
          // innerRadius={60}
          fill="#8884d8"
          label
        />
      </PieChart>

      <div>
          <MonthCalendarSmall dateY={year} dateM={month}/>
          <div>
            <div></div>
            {categoriesTotal.length ? (
              <>
                <div>-{categoriesTotal[0].total} 원</div>
                <div>월별 최대 지출 카테고리: {categoriesTotal[0].name}</div>
              </>
            ): (<div>내역이 없습니다.</div>)}
          </div>
        </div>
    </>
  );
};

export default CategoryPieChart;
