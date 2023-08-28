import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { BillType } from '../../../types/BillType'

interface BillState {
	bills: BillType[]
}

const initialState: BillState = {
	bills: []
}

export const counterSlice = createSlice({
	name: 'billReducer',
	initialState,
	reducers: {
		setUsersAction: (state, action: PayloadAction<BillType[]>) => {
			state.bills = action.payload
		}
	}
})

export const { setUsersAction } = counterSlice.actions

export default counterSlice.reducer
