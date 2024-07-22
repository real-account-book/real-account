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
  const state: string = type === "history" ? "전체" : "카테고리 선택";
  const [items, setItems] = useState<MenuProps["items"]>([]);

  const onClick: MenuProps["onClick"] = ({ key }: any) => {
    if (type === "history") {
      setFilterHistory(key);
      if (key === "plus") {
        setFilterCategory(0);
      }
    } else {
      setFilterHistory("minus");
      setFilterCategory(parseInt(key));
    }
    message.info(`Click on item ${key}`);
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
    <Dropdown menu={{ items, onClick }} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {state}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default FilterDropdown;
