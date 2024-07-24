import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, message, Space } from "antd";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../apis/category";
import { TCategory } from "../../types/category.type";

type TFilterDropDownProps = {
  type: "history" | "categories";
  setFilterCategory: (key: number) => void;
  setFilterHistory: (key: string) => void;
};

type menu = {
  label: string;
  key: string;
}

const initialItems: MenuProps["items"] = [
  {
    label: "전체",
    key: "total",
  },
  {
    label: "수익",
    key: "plus",
  },
  {
    label: "지출",
    key: "minus",
  },
];

const FilterDropdown = ({
  type,
  setFilterCategory,
  setFilterHistory,
}: TFilterDropDownProps) => {
  const [state, seState] = useState<string>(type === "history" ? "전체" : "카테고리 선택")
  const [items, setItems] = useState<MenuProps["items"]>(initialItems);

  const onClick: MenuProps["onClick"] = ({ key }: any) => {
    if (type === "history") {
      setFilterCategory(0);
      setFilterHistory(key);
    } else {
      setFilterHistory("minus");
      setFilterCategory(parseInt(key));
    }
  };

  useEffect(() => {
    if (type === "history") {
      setItems(initialItems);
    } else {
      const categoriesArr: MenuProps["items"] = [];
      getAllCategories()
        .then((categories) => {
          categories.map((category: TCategory) => {
            categoriesArr.push({
              label: category.category_name,
              key: category.category_id,
            });
          });
        })
        .then(() => {
          setItems([...categoriesArr]);
        });
    }
  }, []);


  return (
    <div style={{ cursor: 'pointer'}}>
      <Dropdown menu={{ items, onClick }} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            {state}
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default FilterDropdown;
