import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Transaction } from '../../../types/Transaction'

interface TransactionState {
	transaction: Transaction[]
}

const initialState: TransactionState = {
	transaction: []
}

export const counterSlice = createSlice({
	name: 'transactionReducer',
	initialState,
	reducers: {
		setUsersAction: (state, action: PayloadAction<Transaction[]>) => {
			state.transaction = action.payload
		}
	}
})

export const { setUsersAction } = counterSlice.actions

export default counterSlice.reducer
