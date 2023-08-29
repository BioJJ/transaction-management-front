import { configureStore } from '@reduxjs/toolkit'

import globalReducer from './reducers/globalReducer'

import userReducer from './reducers/userReducer'

import transactionTypeReducer from './reducers/transactionTypeReducer'

import transactionReducer from './reducers/transactionReducer'

export const store = configureStore({
	reducer: {
		globalReducer,
		userReducer,
		transactionTypeReducer,
		transactionReducer
	}
})

export type RootState = ReturnType<typeof store.getState>

export default store
