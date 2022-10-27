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

const calculateAge = (birthday: Date) => { // birthday is a date
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export const FormModalContainer = ({user}: FormModalContainerProps) => {
  const dispatch = useAppDispatch()
  const [form] = useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        dispatch(edit({
          ...user,
          email: values.email,
          cell: values.cell,
          name: {
            title: values.title ?? user.name.title,
            first: values.first,
            last: values.last
          },
          dob: {
            date: values.date,
            age: calculateAge(new Date(values.date))
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
    <Modal title={`Изменить данные пользователя ${user.login.username}`} visible={!!user} onOk={handleOk} onCancel={handleCancel}>
      <UserForm user={user} form={form} />
    </Modal>
  )
}