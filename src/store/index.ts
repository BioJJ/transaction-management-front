import { configureStore } from '@reduxjs/toolkit'

import globalReducer from './reducers/globalReducer'

import userReducer from './reducers/userReducer'

import billReducer from './reducers/billReducer'

export const store = configureStore({
	reducer: {
		globalReducer,
		userReducer,
		billReducer
	}
})

export type RootState = ReturnType<typeof store.getState>

export default store
