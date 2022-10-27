import { createReducer } from '@reduxjs/toolkit'

import { IUsersState } from './types'

import { generate, add } from './thunks'
import { edit, remove } from './actions'

const initialState: IUsersState = {
  fetching: false,
  users: []
}

export const usersReducer = createReducer(initialState, builder =>
  builder
    .addCase(generate.pending, (state) => ({ ...state, fetching: true }))
    .addCase(generate.fulfilled, (state, { payload }) => ({ ...state, fetching: false, users: [...payload] }))
    .addCase(generate.rejected, (state, { payload }) => ({ ...state, fetching: false, users: [] }))
    .addCase(add.fulfilled, (state, { payload }) => ({ ...state, users: [...state.users, payload] }))
    .addCase(remove, (state, { payload }) => ({ ...state, users: state.users.filter((user) => user.login.uuid !== payload.login.uuid) }))
    .addCase(edit, (state, { payload }) => {
      const userIndex = state.users.findIndex((user) => user.login.uuid === payload.login.uuid)
      state.users[userIndex] = payload
    })
)