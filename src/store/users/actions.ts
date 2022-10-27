import { createAction } from '@reduxjs/toolkit'

import { IUser } from '../../models'

export const setUsers = createAction<IUser[]>('users.setReady')

export const remove = createAction<IUser>('users.remove')
export const edit = createAction<IUser>('users.edit')