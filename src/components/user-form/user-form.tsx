import React from 'react'
import { Form, Input, Select } from "antd";
import { IUserFormProps } from "./types";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const { Option } = Select;

export const UserForm = ({ user, form }: IUserFormProps) => {

  const initialValues = {
    first: user.name.first,
    last: user.name.last,
    email: user.email,
    phone: user.phone,
  }

  return (
    <Form {...layout} initialValues={initialValues} form={form} name="control-hooks">
      {/* {user.gender === 'female' && <Form.Item name="title" label="Title">
        <Select
          placeholder="Выберите обращение"
        >
          <Option value="mrs">Mrs</Option>
          <Option value="miss">Miss</Option>
          <Option value="ms">Ms</Option>
        </Select>
      </Form.Item>
      } */}
      <Form.Item name="first" label="Имя">
        <Input />
      </Form.Item>
      <Form.Item name="last" label="Фамилия">
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email">
        <Input />
      </Form.Item>
      <Form.Item name="phone" label="Телефон">
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
      </Form.Item>
    </Form>
  )
}