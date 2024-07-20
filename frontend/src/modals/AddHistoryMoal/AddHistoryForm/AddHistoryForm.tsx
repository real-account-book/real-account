import { Button, DatePicker, Form, Input, Select, Space } from "antd";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../../apis/category";
import { dateFormatter } from "../../../utils/dateFormatter";
import { addMinus } from "../../../apis/minus";
import { addPlus } from "../../../apis/plus";

type TAddHistoryForm = {
  history: "plus" | "minus";
};

type TCategory = {
  category_id: number;
  category_name: string;
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AddHistoryForm = ({ history }: TAddHistoryForm) => {
  const { Option } = Select;

  const [form] = Form.useForm();
  const [categories, setCategories] = useState<TCategory[]>([])

  useEffect(() => {
    getAllCategories().then(res => setCategories(res))
  }, [])

  const config = {
    rules: [
      {
        type: "object" as const,
        required: true,
        message: "Please select time!",
      },
    ],
  };

  const onGenderChange = (value: string) => {
    switch (value) {
      case "male":
        form.setFieldsValue({ note: "Hi, man!" });
        break;
      case "female":
        form.setFieldsValue({ note: "Hi, lady!" });
        break;
      case "other":
        form.setFieldsValue({ note: "Hi there!" });
        break;
      default:
    }
  };

  const onFinish = (values: any) => {
    let data;
    if (history === 'plus') {
      data = { plus : values['금액']}
    } else { data = { 
      minus : values['금액'],
      category: values['지출 카테고리']
    }}

    const selectedDate = values['datepicker']
    const date = dateFormatter(selectedDate.year(), selectedDate.month() + 1, selectedDate.date());

    let payload = {
      ...data,
      title: history === 'plus' ? values['수익처'] : values['지출처'],
      content: '',
      uploaded_at: date
    }
    if (history === "plus") {
      addPlus(payload)
    } else if (history === "minus") {
      addMinus(payload)
    }

  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
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
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={history === "plus" ? "수익처" : "지출처"}
          label={history === "plus" ? "수익처" : "지출처"}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='datepicker'
          label={history === "plus" ? "수익 일자" : "지출 일자"}
          {...config}
        >
          <DatePicker />
        </Form.Item>
        {history === "minus" && (
          <>
            <Form.Item
              name="지출 카테고리"
              label="지출 카테고리"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="지출 내역 카테고리를 선택해주세요"
                onChange={onGenderChange}
                allowClear
              >
                {categories.map(({category_id, category_name}: TCategory) => (
                  <Option key={category_id} value={category_id}>{category_name}</Option>
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
    </>
  );
};

export default AddHistoryForm;
