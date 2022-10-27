import { createReducer } from '@reduxjs/toolkit'

import { IModalState } from './types'

import { setUser } from './actions'

const initialState: IModalState = {
  user: null
}

export const modalReducer = createReducer(initialState, builder =>
  builder
    .addCase(setUser, (state, { payload }) => ({ ...state, user: payload }))
)