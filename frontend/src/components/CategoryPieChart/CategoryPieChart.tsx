import { useEffect, useState } from "react";
import { Pie, PieChart } from "recharts";
import { TMinusHistory } from "../../types/history.type";
import { getAllCategories } from "../../apis/category";
import { dateFormatter } from "../../utils/dateFormatter";
import { getCategoryTotal } from "../../apis/total";
import { TCategory } from "../../types/category.type";
import MonthCalendarSmall from "../MonthCalendarSmall/MonthCalendarSmall";
import { addButtonBox, assetFirstText, assetImage, assetImageContainer, assetSecondText, assetTextBox, categoryIcon, categoryMaxBox, categoryName, categoryPrice } from "./CategoryPieChart.css";
import { PieChartOutlined } from "@ant-design/icons";
import assetImg from '../../assets/images/finance-app.png';
import AddButton from "../AddButton/AddButton";
import useYearTotalStore from "../../store/yearTotalStore";
import useChangeHistoriesStore from "../../store/changeHistories";

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
  const [checkload, setCheckLoad] = useState<boolean>(false);
  const { yearlyData } = useYearTotalStore();
  const { historyFlag } = useChangeHistoriesStore();

  useEffect(() => {
    const startedAt = dateFormatter(parseInt(year), parseInt(month), 1);
    const endedAt = dateFormatter(parseInt(year), parseInt(month), new Date(parseInt(year), parseInt(month), 0).getDate());
    let totalArr: TCategoriesTotal[] = [];
    getAllCategories().then((allCategories) => {
      allCategories.map((category: TCategory) => {
        let total: number = 0;
        getCategoryTotal(startedAt, endedAt, category.category_id)
        .then((histories) => {
          if (histories.length > 0) {
            histories.map((history: TMinusHistory) => {
              total += history.minus
            })
            const categoryTotal = {
              name: category.category_name,
              total: total
            }
            totalArr.push(categoryTotal)
          }
        }).then(() => {
          totalArr.sort((a, b) => b.total - a.total)
          setCategoriesTotal([...totalArr])
        })
      })
    }).then(() => setCheckLoad(true))
  }, [historyFlag])

  return (
    <>
      {categoriesTotal.length > 0  ? (
        <PieChart width={400} height={280}>
          <Pie
            data={categoriesTotal}
            dataKey="total"
            nameKey="name"
            cx="55%"
            cy="55%"
            outerRadius={100}
            // innerRadius={60}
            fill="#8884d8"
            label
          />
        </PieChart>
        ) : (!checkload) ? (<div style={{width: '400px'}}></div>) : (
          <div className={assetImageContainer}>
            <img className={assetImage} src={assetImg} alt="asset-img.png" />
            <div className={assetTextBox}>
              <div>
                <div className={assetFirstText}>통계로 소비 관리</div>
                <div className={assetSecondText}>소비 내역을 입력하고 관리하세요</div>
              </div>
              <div className={addButtonBox}>
                <AddButton />
              </div>
            </div>
          </div>
        )}

      <div>
        <MonthCalendarSmall dateY={year} dateM={month}/>
        <div className={categoryMaxBox}>
          {categoriesTotal.length > 0 ? (
            <div style={{display: 'flex'}}>
              <div className={categoryIcon}>
                <PieChartOutlined style={{fontSize: '40px'}} />
              </div>
              <div>
                <div className={categoryPrice}>-{categoriesTotal[0].total} 원</div>
                <div className={categoryName}>
                  <div style={{marginRight: '10px'}}>{categoriesTotal[0].name}</div>
                  <div style={{fontSize: '12px', marginTop: '3px'}}>월별 최대 지출 카테고리</div>
                </div>
              </div>
            </div>
          ): (<div>내역이 없습니다.</div>)}
        </div>
      </div>
    </>
  );
};

export default CategoryPieChart;
