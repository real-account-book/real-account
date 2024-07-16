import React from 'react';
import { Button, DatePicker, Modal, Form, Input, Select, Space } from 'antd';

type TAddHistoryForm = {
  history: 'plus' | 'minus'
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AddHistoryForm = ({history}: TAddHistoryForm) => {
  
  const { Option } = Select;

  const [form] = Form.useForm();

  const config = {
    rules: [{ type: 'object' as const, required: true, message: 'Please select time!' }],
  };

  const onGenderChange = (value: string) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: 'Hi, man!' });
        break;
      case 'female':
        form.setFieldsValue({ note: 'Hi, lady!' });
        break;
      case 'other':
        form.setFieldsValue({ note: 'Hi there!' });
        break;
      default:
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({ note: 'Hello world!', gender: 'male' });
  };

  
  return(
    <>
      <Form
        layout='vertical'
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
      >
        <Form.Item name="금액" label="금액" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={history === 'plus' ? '사용처' : '수익처'} label={history === 'plus' ? '사용처' : '수익처'} rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="date-picker" label={history === 'plus' ? '지출 일자' : '수익 일자'} {...config}>
          <DatePicker />
        </Form.Item>
        {history === 'plus' && (
          <>
            <Form.Item name="지출 카테고리" label="지출 카테고리" rules={[{ required: true }]}>
            <Select
              placeholder="지출 내역 카테고리를 선택해주세요"
              onChange={onGenderChange}
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
          >
            {({ getFieldValue }) =>
              getFieldValue('gender') === 'other' ? (
                <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              ) : null
            }
          </Form.Item>
        </>)}

        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              등록
            </Button>
            <Button htmlType="button" onClick={onReset}>
              초기화
            </Button>
            {/* <Button type="link" htmlType="button" onClick={onFill}>
              Fill form
            </Button> */}
          </Space>
        </Form.Item>
      </Form>
    </>
  );
}

export default AddHistoryForm;