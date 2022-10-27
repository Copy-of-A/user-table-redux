import React from 'react'
import { DatePicker, Form, Input, Select } from "antd";
import { IUserFormProps } from "./types";
import moment from 'moment'

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
    cell: user.cell,
    title: user.name.title,
    date: moment(user.dob.date),
  }

  return (
    <Form {...layout} initialValues={initialValues} form={form} name="control-hooks">
      {user.gender === 'female' && <Form.Item name="title" label="Title">
        <Select
          placeholder="Выберите обращение"
        >
          <Option value="Mrs">Mrs</Option>
          <Option value="Miss">Miss</Option>
          <Option value="Ms">Ms</Option>
        </Select>
      </Form.Item>
      }
      <Form.Item
        name="first"
        label="Имя"
        rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="last" label="Фамилия" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[
        {
          type: 'email',
          message: 'The input is not valid E-mail!',
        },
        { required: true }
      ]}>
        <Input />
      </Form.Item>
      <Form.Item name="cell" label="Телефон" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="date" label="Дата рождения" rules={[{ required: true }]}>
        <DatePicker disabledDate={(current) => current > moment()} />
      </Form.Item>
      <Form.Item {...tailLayout}>
      </Form.Item>
    </Form>
  )
}