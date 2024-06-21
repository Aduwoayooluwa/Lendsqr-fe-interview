import React from 'react';
import { Form, Input, Button, DatePicker, Select } from 'antd';
import './styles/filter-form.scss';

const { Option } = Select;

interface FilterFormProps {
  onSubmit: (values: unknown) => void;
 // onReset: () => void;
}

export const FilterForm: React.FC<FilterFormProps> = ({ onSubmit }) => {

  const [form] = Form.useForm();

  const handleFinish = (values: unknown) => {
    onSubmit(values);
  };

  return (
    <Form form={form} onFinish={handleFinish} layout="vertical" className="filter-form">
      <Form.Item name="organization" label="Organization">
        <Select placeholder="Select">
          <Option value="organization1">Organization 1</Option>
          <Option value="organization2">Organization 2</Option>
        </Select>
      </Form.Item>
      <Form.Item name="username" label="Username">
        <Input placeholder="User" />
      </Form.Item>
      <Form.Item name="email" label="Email">
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item name="date" label="Date">
        <DatePicker />
      </Form.Item>
      <Form.Item name="phoneNumber" label="Phone Number">
        <Input placeholder="Phone Number" />
      </Form.Item>
      <Form.Item name="status" label="Status">
        <Select placeholder="Select">
          <Option value="active">Active</Option>
          <Option value="inactive">Inactive</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" className="btn-filter" htmlType="submit">
          Filter
        </Button>
        <Button htmlType="button" onClick={() => form.resetFields()}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};
