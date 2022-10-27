import { configureStore } from '@reduxjs/toolkit'

import { applicationReducer } from './application/reducer'
import { modalReducer } from './form-modal/reducer'
import { usersReducer } from './users/reducer'

export const createStore = () => configureStore({
  reducer: {
    application: applicationReducer,
    users: usersReducer,
    modal: modalReducer,
  }
})
