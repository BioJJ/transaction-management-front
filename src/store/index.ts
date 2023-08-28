import { configureStore } from '@reduxjs/toolkit'

import globalReducer from './reducers/globalReducer'

import userReducer from './reducers/userReducer'

import transactionTypeReducer from './reducers/transactionTypeReducer'

export const store = configureStore({
	reducer: {
		globalReducer,
		userReducer,
		transactionTypeReducer
	}
})

export type RootState = ReturnType<typeof store.getState>

export default store
