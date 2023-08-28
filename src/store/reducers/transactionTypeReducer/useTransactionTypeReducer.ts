import { useDispatch } from 'react-redux'

import { TransactionType } from '../../../types/TransactionType'
import { useAppSelector } from '../../hooks'
import { setUsersAction } from '.'

export const useTransactionTypeReducer = () => {
	const dispatch = useDispatch()
	const { transactionType } = useAppSelector(
		(state) => state.transactionTypeReducer
	)

	const setTransactionType = (transactionType: TransactionType[]) => {
		dispatch(setUsersAction(transactionType))
	}

	return {
		transactionType,
		setTransactionType
	}
}
