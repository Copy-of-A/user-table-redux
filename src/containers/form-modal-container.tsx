import React from 'react'
import { Modal } from "antd"
import { UserForm } from "../components/user-form";
import { useAppDispatch } from "../store";
import { setUser } from '../store/form-modal/actions';
import { edit } from '../store/users/actions'
import { useForm } from 'antd/lib/form/Form';
import { IUser } from '../models';

interface FormModalContainerProps {
  user: IUser
}

export const FormModalContainer = ({user}: FormModalContainerProps) => {
  const dispatch = useAppDispatch()
  const [form] = useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then((values: any) => {
        console.log("values, ", values)
        form.resetFields();
        dispatch(edit({
          ...user,
          email: values.email,
          phone: values.phone,
          name: {
            title: values.title ?? user.name.title,
            first: values.first,
            last: values.last
          }
        }));
        dispatch(setUser(null))
      })
      .catch((err) => console.log("err", err))
  };

  const handleCancel = () => {
    dispatch(setUser(null))
  };


  console.log("FormModal")
  return (
    <Modal title="Basic Modal" visible={!!user} onOk={handleOk} onCancel={handleCancel}>
      <UserForm user={user} form={form} />
    </Modal>
  )
}