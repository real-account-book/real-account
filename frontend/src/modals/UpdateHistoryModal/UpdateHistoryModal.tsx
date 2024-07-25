import { Button, DatePicker, Form, Input, InputNumber, Modal, Select, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { getAllCategories } from '../../apis/category';
import { TCategory } from '../../types/category.type';
import { PlusCircleOutlined } from '@ant-design/icons';
import CategoryModal from '../CategoryModal/CategoryModal';
import { TMinusHistory, TPlusHistory } from '../../types/history.type';
import dayjs from 'dayjs';
import { updatePlus } from '../../apis/plus';
import { updateMinus } from '../../apis/minus';
import { dateFormatter } from '../../utils/dateFormatter';
import useYearTotalStore from '../../store/yearTotalStore';
import useChangeHistoriesStore from '../../store/changeHistories';
import { addButton, buttonIcon, buttonText } from './UpdateHistoryModal.css';

type YUpdateHistoryModalProps = {
  isUpdateOpen: boolean;
  setIsUpdateOpen: (isUpdateOpen: boolean) => void;
  openNotification: any;
  history: "plus" | "minus";
  data: TPlusHistory | TMinusHistory;
}

const UpdateHistoryModal = ({ isUpdateOpen, setIsUpdateOpen, openNotification, history, data }: YUpdateHistoryModalProps) => {
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const { updateMinuses, updatePluses } = useYearTotalStore();
  const { handleHistoryFlag } = useChangeHistoriesStore();

  useEffect(() => {
    getAllCategories().then((res) => setCategories(res));
  }, []);

  const { Option } = Select;
  const [form] = Form.useForm();

  const config = {
    rules: [
      {
        type: "object" as const,
        required: true,
        message: "Please select time!",
      },
    ],
  };

  const onCategoryChange = (value: string) => {
    switch (value) {
      default:
    }
  };

  const onFinish = (values: any) => {
    let dataBox;
    if ('plus' in data) {
      dataBox = { plus: parseInt(values["금액"])};
    } else {
      dataBox = {
        minus: parseInt(values["금액"]),
        category_id: values["지출 카테고리"],
      };
    }

    const selectedDate = values["datepicker"];
    const date = dateFormatter(
      selectedDate.year(),
      selectedDate.month() + 1,
      selectedDate.date()
    );

    let payload: any = {
      ...dataBox,
      title: history === "plus" ? values["수익처"] : values["지출처"],
      content: values["메모"],
      uploaded_at: date,
    };
    console.log(payload);
    if ('plus' in data) {
      const send = {plus_id: data.plus_id, payload}
      updatePlus(send).then(() => {
        const price = parseInt(values["금액"]) - data.plus
        updatePluses(price);
        successFinish();
      });
    } else if (history === "minus") {
      const send = {minus_id: data.minus_id, payload}
      const price = parseInt(values["금액"]) - data.minus
      updateMinus(send).then(() => {
        updateMinuses(price);
        successFinish();
      });
    }
  };

  const successFinish = () => {
    setIsUpdateOpen(false);
    handleHistoryFlag();
    setTimeout(() => {
      openNotification("bottomRight");
    }, 300);
  };

  const onReset = () => {
    form.resetFields();
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  return(
    <Modal
      open={isUpdateOpen}
      title="내역 수정"
      onCancel={() => setIsUpdateOpen(false)}
      footer={() => null}
    >
      <Form
        layout="vertical"
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
      >
        <Form.Item 
          name="금액" 
          label="금액" 
          rules={[{ required: true }]}
          initialValue={'plus' in data ? data.plus : data.minus}
        >
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item
          name={history === "plus" ? "수익처" : "지출처"}
          label={history === "plus" ? "수익처" : "지출처"}
          rules={[{ required: true }]}
          initialValue={data.title}
        >
          <Input />
        </Form.Item>
        <Form.Item 
          name="메모" 
          label="메모" 
          rules={[{ required: true }]}
          initialValue={data.content}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="datepicker"
          label={history === "plus" ? "수익 일자" : "지출 일자"}
          {...config}
          initialValue={dayjs(data.uploaded_at)}
        >
          <DatePicker />
        </Form.Item>
        {history === "minus" && (
          <>
            <Form.Item
              name="지출 카테고리"
              label="지출 카테고리"
              rules={[{ required: true }]}
              initialValue={'minus' in data && data.category.category_id}
            >
              <Select
                placeholder="지출 내역 카테고리를 선택해주세요"
                onChange={onCategoryChange}
                allowClear
              >
                {categories.map(({ category_id, category_name }: TCategory) => (
                  <Option key={category_id} value={category_id}>
                    {category_name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              noStyle
              shouldUpdate={(prevValues, currentValues) =>
                prevValues.gender !== currentValues.gender
              }
            >
              {({ getFieldValue }) =>
                getFieldValue("gender") === "other" ? (
                  <Form.Item
                    name="customizeGender"
                    label="Customize Gender"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                ) : null
              }
            </Form.Item>

            <button className={addButton} onClick={(e) => {
              e.preventDefault();
              setOpen(!open)
            }}>
              <PlusCircleOutlined className={buttonIcon}/>
              <div className={buttonText}>카테고리 편집</div>
            </button>
            <CategoryModal
              open={open}
              setOpen={setOpen}
              categories={categories}
              setCategories={setCategories}
            />
          </>
        )}

        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              등록
            </Button>
            <Button htmlType="button" onClick={onReset}>
              초기화
            </Button>
          </Space>
        </Form.Item>
      </Form>

    </Modal>
  );
}

export default UpdateHistoryModal;