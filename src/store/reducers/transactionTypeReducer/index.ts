import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TransactionType } from '../../../types/TransactionType'

interface TransactionTypeState {
	transactionType: TransactionType[]
}

const initialState: TransactionTypeState = {
	transactionType: []
}

export const counterSlice = createSlice({
	name: 'transactionTypeReducer',
	initialState,
	reducers: {
		setUsersAction: (state, action: PayloadAction<TransactionType[]>) => {
			state.transactionType = action.payload
		}
	}
})

export const { setUsersAction } = counterSlice.actions

export default counterSlice.reducer
