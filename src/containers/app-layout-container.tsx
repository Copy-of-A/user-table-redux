import React from 'react'

import { AppLayout, IAppAction } from '../components/app-layout'
import { UsersTableContainer } from './users-table-container'

import { add, generate } from '../store/users/thunks'
import { useAppDispatch, useAppSelector } from '../store'
import { FormModalContainer } from './form-modal-container'

export const AppLayoutContainer = () => {
  const dispatch = useAppDispatch()

  const actions: IAppAction[] = [
    { key: 'generate', title: 'Сгенерировать еще раз', action: () => dispatch(generate(20)) },
    { key: 'add', title: 'Добавить пользователя', action: () => dispatch(add()) }
  ]

  const user = useAppSelector(s => s.modal.user)

  return <AppLayout actions={actions}>
    <UsersTableContainer />
    {user && <FormModalContainer user={user} />}
  </AppLayout>
}
