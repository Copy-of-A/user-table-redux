import { createAction } from '@reduxjs/toolkit'
import { IUser } from '../../models'

export const setUser = createAction<IUser>('modal.setUser')